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
    
}

/**
 * Takes in a firestore change and context for a user review
 * and updates the corresponding review on the owning brewery 
 * and updates the average rating on the brewery the review belongs to if needed
 * @param {*} change 
 * @param {*} context 
 */
module.exports.updateUserReview = function(change, context) {
    
}

/**
 * Deletes the corresponding review on the users collection and updates the average rating on the brewery
 * @param {*} snashot 
 * @param {*} context 
 */
module.exports.deleteBreweryReview = function(snashot, context) {
    
}

/**
 * Deletes the corresponding review on the breweries collection
 * updates the average rating on the brewery
 * deleted the review mapping
 * @param {*} snashot 
 * @param {*} context 
 */
module.exports.deleteUserReview = function(snashot, context) {
    
}

/**
 * Function to delete the old user profile image when a new one is upload
 * so we do not crowd the storage bucket!
 * @param {*} change 
 * @param {*} context 
 */
module.exports.userProfileImageChange = function(change, context) {
    
}

/**
 * Aggregates review data for breweries
 */
function aggregateRatings(breweryId) {
    
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
    
 }

 /**
  * Helper function to determine if there was a meaningful change between the given reviews
  * @param {*} newValue 
  * @param {*} previousValue 
  */
 function checkReviewChanged(newValue, previousValue) {
     
 }