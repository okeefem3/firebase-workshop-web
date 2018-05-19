const defaultImagePath = '../../assets/img/no-image.png';
const admin = require('firebase-admin');

/**
 * Takes in a firestore change and context for a brewery review
 * and updates the corresponding review on the owning users review collection
 * and updates the average rating on the brewery the review belongs to if needed
 * @param {*} change 
 * @param {*} context 
 */
module.exports.updateBreweryReview = function(change, context) {
    console.log(change);
    console.log(context);
    const reviewId = context.params.reviewId;
    const previousValue = change.before.data();
    const newValue = change.after.data();

    // Sync changes with user review collection.
    const docRef = admin.firestore().collection('users').doc(newValue.uid);
    updateReview(docRef, newValue, previousValue, reviewId);
}

/**
 * Takes in a firestore change and context for a user review
 * and updates the corresponding review on the owning brewery 
 * and updates the average rating on the brewery the review belongs to if needed
 * @param {*} change 
 * @param {*} context 
 */
module.exports.updateUserReview = function(change, context) {
    console.log(change);
    console.log(context);
    const reviewId = context.params.reviewId;
    const previousValue = change.before.data();
    const newValue = change.after.data();

    // Sync changes with user review collection.
    const docRef = admin.firestore().collection('breweries').doc(newValue.breweryId);
    updateReview(docRef, newValue, previousValue, reviewId);
}

/**
 * Deletes the corresponding review on the users collection and updates the average rating on the brewery
 * @param {*} snashot 
 * @param {*} context 
 */
module.exports.deleteBreweryReview = function(snashot, context) {
    const reviewId = context.params.reviewId;
    const deletedReview = snashot.data();
    const docRef = admin.firestore().collection('users').doc(deletedReview.uid);
    docRef.collection('reviews').doc(reviewId).delete();
    return aggregateRatings(deletedReview.breweryId);
}

/**
 * Deletes the corresponding review on the breweries collection and updates the average rating on the brewery
 * @param {*} snashot 
 * @param {*} context 
 */
module.exports.deleteUserReview = function(snashot, context) {
    const reviewId = context.params.reviewId;
    const deletedReview = snashot.data();
    const docRef = admin.firestore().collection('breweries').doc(deletedReview.breweryId);
    docRef.collection('reviews').doc(reviewId).delete();
    return aggregateRatings(deletedReview.breweryId);
}

module.exports.userProfileImageChange = function(change, context) {
    const userId = context.params.userId;
    const previousValue = change.before.data();
    const newValue = change.after.data();
    console.log(`previous value ${previousValue.profileImageUrl}`);
    console.log(`new value ${newValue.profileImageUrl}`);
    if (previousValue.profileImageUrl && newValue.profileImageUrl && !(newValue.profileImageUrl  === previousValue.profileImageUrl  || newValue.profileImageUrl  === defaultImagePath )) {
        // Delete the old image so we do not crowd our storage bucket!
        // var imageRef = admin.storage().refFromURL(previousValue.profileImageUrl);
        const bucket = gcs.bucket('kla-firebase-workshop.appspot.com')
                          .file(`users/${userId}/${previousValue.profileImagePath}`)
                          .delete()
                          .then(() => {
                            return null;
                           })
                          .catch(err => {
                            console.error('ERROR:', err);
                          }); 
    }
    return null;
}

/**
 * Aggregates review data for breweries
 */
function aggregateRatings(breweryId) {
    const docRef = admin.firestore().collection('breweries').doc(breweryId);

    return docRef.collection('reviews').get().then(querySnapshot => {
        const numberReviews = querySnapshot.size;
        const totalRating = querySnapshot.docs.map(doc => doc.data().rating)
                                                .reduce((rating, total) => rating + total, 0);
                                                console.log(totalRating);

        const averageRating = (totalRating / numberReviews).toFixed(2);
        console.log(averageRating);

        return docRef.update({ averageRating:  averageRating, numberReviews: numberReviews });
    }).catch(e => {
        console.log(`Error fetching brewery ratings for ID ${breweryId}`);
        console.log(e);
    });
}

 /**
  * Helper function to sync the given review between users and breweries if changes were made
  * and to update the average rating on the brewery if rating was changed
  * @param {*} docRefToUpdate 
  * @param {*} newValue 
  * @param {*} previousValue 
  * @param {*} reviewId 
  */
 function updateReview(docRefToUpdate, newValue, previousValue, reviewId) {
    if (checkReviewChanged(newValue, previousValue)) {
        docRefToUpdate.collection('reviews').doc(reviewId).set(newValue);
    } else return null;

    // Only update the average if there is a difference
    if (newValue && previousValue && newValue.rating === previousValue.rating) return null;
    return aggregateRatings(newValue.breweryId);
 }

 /**
  * Helper function to determine if there was a meaningful change between the given reviews
  * @param {*} newValue 
  * @param {*} previousValue 
  */
 function checkReviewChanged(newValue, previousValue) {
     return newValue.rating !== previousValue.rating || 
            newValue.text !== previousValue.text || 
            newValue.title !== previousValue.title;
 }