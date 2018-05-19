const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

/**
 * To deploy functions only
 * firebase deploy --only functions
 */

/**
 * Authentication Triggers
 */

const authFunctions = require('./auth-functions');
exports.newUser = functions.auth.user().onCreate(authFunctions.newUser);

/**
 * Firestore Triggers
 */

// Firestore gotcha:
// Listening to a specific property is not supported, this will cause a 400 error.
// exports.updateBreweryAverageRating = functions.firestore.document('breweries/{breweryId}/reviews/{reviewId}/rating').onUpdate((change, context) => {

const firestoreFunctions = require('./firestore-funtions');

exports.updateBreweryReview = functions.firestore.document('breweries/{breweryId}/reviews/{reviewId}').onUpdate(firestoreFunctions.updateBreweryReview);
exports.updateUserReview = functions.firestore.document('users/{userId}/reviews/{reviewId}').onUpdate(firestoreFunctions.updateUserReview);
exports.deleteBreweryReview = functions.firestore.document('breweries/{breweryId}/reviews/{reviewId}').onDelete(firestoreFunctions.deleteBreweryReview);
exports.deleteUserReview = functions.firestore.document('users/{userId}/reviews/{reviewId}').onDelete(firestoreFunctions.deleteUserReview);

// Currently not using this function because we end up with a race condition with the blur images function
// exports.userProfileImageChange = functions.firestore.document('users/{userId}').onUpdate(firestoreFunctions.userProfileImageChange);

 /**
  * Storage Triggers
  */
 const storageFunctions = require('./storage-functions')
 exports.blurOffensiveImages = functions.storage.object().onFinalize(storageFunctions.moderateUserProfileImage);

 /**
  * HTTP Triggers
  */
 const httpFunctions = require('./http-functions');
 exports.httpTriggers = functions.https.onRequest(httpFunctions.expressApp);

 /**
  * Google Cloud Pub/Sub Triggers
  */
