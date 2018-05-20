Starter code for the firebase workshop!

Stackblitz link
https://stackblitz.com/github/okeefem3/firebase-workshop-web/tree/connect-to-firebase

Or if you followed the directions to set up your development environment, just clone the project and checkout the connect-to-firebase branch.

# Connect An App To Firebase

Goals:
* Set up a Firebase project 
* Add Firebase project web app configuration to our app
* Initialize our app as a Firebase app using the JS SDK
* Install Firebase CLI tools and log in

References:
* https://firebase.google.com/docs/web/setup
* https://nodejs.org/en/
* https://firebase.google.com/docs/cli/

Steps:
* Initialize a firebase project https://console.firebase.google.com/
* Copy and paste the Firebase web config key/value pairs into the object defined in ./src/config/firebase.config.ts
* Initialize the firebase app in the app.module.ts file
* Setup Firebase CLI (We will use this later to deploy to hosting and cloud functions)
    1. Install Node LTS https://nodejs.org/en/
    2. Open a terminal on your machine and run `npm install -g firebase-tools`
    3. run `firebase login` and login with the SAME account that you used to create your Firebase project
        * GOTCHA, if you have multiple google accounts be sure that you use the same one as you used to create your Firebase project

# Authentication

Goals:
* Set up ability for users to sign up and sign in anonymously, using email/password or Google
* Set up ability for users to convert an anonymous account to email/password or Google
* Set up basic monitoring of auth state as well as ability to sign out
* Show how to set auth language
* Show how to use the built in password reset and verification functionality

References:
* https://firebase.google.com/docs/auth/web/start

Steps:
* Go to your Firebase project console https://console.firebase.google.com/
    1. Select Authentication from the menu
    2. Select the SIGN-IN METHOD tab
    3. Enable Email/Password (if needed) Google and Anonymous
* In the the auth.component.ts file implement sign up/in code for these three methods
* Implement the code to convert an anonymous user to Email/Password and Google
* Implement code to get the current user from Firebase auth, and to sign out
* Implement code in the app.component.ts to set the auth language and listen to auth state changes
    * You will also want to implement code in home.component.ts to listen to auth state changes, and to sign out
* BONUS, if you have the time explore some of the bonus functionality we have drafted up in auth.component.ts, or check out the docs for something different

Wasn't that a lot easier than implementing auth from scratch?

# Firestore

Goals:
* Set up ability for user to read, add, update and delete breweries
* Set up ability for user to read, add, update and delete reviews as a collection owned by a brewery  document
* Set up basic Firestore security rules
* BONUS TODO set up relationship between user and brewery to prevent multiple reviews (adding, checking for showing add button, and add the rule)

References
* https://firebase.google.com/docs/firestore/
* https://angularfirebase.com/lessons/firestore-nosql-data-modeling-by-example/
* https://angularfirebase.com/lessons/advanced-firestore-nosql-data-structure-examples/

# Hosting

Goals:
* Host our app through Firebase!

# Cloud Functions

Goals:
* When a new user is created through auth, add a user to Firestore
* When a review is updated or deleted, sync the data with a collection of reviews under the user who created it and update the average rating on the brewery
    * This will also include adding to the app the ability to read, delete and update reviews from a user profile screen
* When a brewery is viewed send an http request to update the number of views on the brewery
* BONUS/TODO Cron jobs

# Storage & Cloud Vision

Goals:
* Build the ability for a user to upload a profile image
* Build a function that will moderate the profile image using the Cloud Vision API
* Update firestore and storage rules to block a locked user from doing any add/update/delete actions



