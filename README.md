Starter code for the firebase workshop!

Stackblitz link
https://stackblitz.com/github/okeefem3/firebase-workshop-web/tree/connect-to-firebase

# Development environment set up 
## Please do before coming to the workshop
* Download Node, we recommend the LTS version 
    * https://nodejs.org/en/
* Open a terminal window and verify that you have npm installed with `npm -v`
* Install Firebase CLI latest version `npm install -g firebase-tools`
    * https://firebase.google.com/docs/cli/
* Install Angular CLI latest version `npm install -g @angular/cli`
    * https://cli.angular.io/
* Install git, or any git client that you are comfortable with
    * git https://git-scm.com/ 
    * Gitkraken is an easy to use free dekstop client https://www.gitkraken.com/ 
* Clone our repository and checkout the connect-to-firebase branch for the starter code
* You will want a goode code editor, we recommend Visual Studio Code (free) or Webstorm (paid, has free trial)
    * https://code.visualstudio.com/
    * https://www.jetbrains.com/webstorm/
    * Other editors like Sublime and Atom also work well
* Run `npm install` from the root app directory to install app dependencies
* run `npm install` from the /functions directory to install cloud functions dependencies
* Once you have the project set up, from the root directory you can run `ng serve` and point your browser to http://localhost:4200/ 
* The recomended browsers to use for development would be Google Chrome or Mozilla Firefox
    * https://www.google.com/chrome/
    * https://www.mozilla.org/en-US/

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
* Setup Firebase CLI if you have not already (We will use this later to deploy to hosting and cloud functions)
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

Steps:
* In brewery-list.component.ts get the reference to Firestore and breweries collection
* Listen to changes in the breweries collection and make the collection accessible to the component 
* Implement the ability to add and delete breweries from the collection
* Implement getting the user id from the current logged in user
* In brewery.component.ts get the reference to Firestore, and the brewery document associated with ID in the route params
* Listen to changes in the brewery document and make the brewery available to the component
* Get the reviews collection from the brewery document, listen to changes and make it available to the component
* Implement adding, saving and deleting a review
* Implement getting the user id from the current logged in user

# Hosting

Goals:
* Host our app through Firebase!

References:
* https://firebase.google.com/docs/hosting/

Steps:
* If you have ng serve running, kill it with ctrl-c
* From the the app root directory run `firebase init` and answer the prompts as follows
    * CLI features - use the arrow keys and space bar to select
        1. Firestore
        2. Functions
        3. Hosting
        4. Storage
    * Hit enter to continue
    * Firestore Rules? 
        * use the default (just hit enter)
    * Firestore Indexes? 
        * use the default (just hit enter)
    * Language for Cloud Functions?
        * Select Javascript and hit enter
    * ESLint
        * type Y and hit enter
    * Overwrite functions/package.json? 
        * type N and hit enter
        * GOTCHA if you say yes here your functions will have a hard time finding our third part dependencies and won't work
    * Overwrite functions/.eslintrc.json?
        * type N and hit enter
    * Overwrite functions/index.js?
        * type N and hit enter
        * GOTCHA if you say yes here, you will not have the starter code for functions!
    * Install dependencies with npm now? 
        * type Y and hit enter
    * What do you want to use as your public directory?
        * type dist and hit enter
        * GOTCHA if you build and deploy your app but nothing shows up when you navigate to your hosting URL, it may be because you did not point to the dist directory in this step
    * Configure as a single page app?
        * type y and hit enter
    * What file should be used for Storage Rules?
        * use the default (just hit enter)
* Run `ng build` to build your app
* Run  `firebase deploy --only hosting` 
    * Follow the link that the CLI tools spit out to reach your now publicly hosted app

# Cloud Functions

Goals:
* When a new user is created through auth, add a user to Firestore
* When a review is updated or deleted, sync the data with a collection of reviews under the user who created it and update the average rating on the brewery
    * This will also include adding to the app the ability to read, delete and update reviews from a user profile screen
* When a brewery is viewed send an http request to update the number of views on the brewery
* BONUS/TODO Cron jobs

References:
* https://firebase.google.com/docs/functions/
* https://github.com/firebase/functions-samples
* https://nodemailer.com/about/
* https://angularfirebase.com/lessons/firestore-cloud-functions-data-aggregation/

Steps:
* If you have not already run `npm install` from the /functions directory
* In auth-functions.js, implement the newUser function to create a user document in Firestore and send a welcome email if their email exists
    * We have supplied you with helper functions to actually send the email via nodemailer
* In firestore-functions.js
    * Review update trigger
        1. Implement the checkReviewChanged function to decide whether the useful parts of the review actually changed
            * Yes you could use a 3rd party library like lodash for this if you want, but for this simple example we will implement it ourselves!
        2. Implement the updateBreweryReview function to sync the data to the reviews collection under the user that created it if the review changed during the update
        3. Implement the aggregateRatings function to update the average rating field on the reviews parent brewery document
        4. Call aggregateRatings from updateBreweryReview only if the rating changed during the review update
        5. Implement the updateUserReview function, it will be the same as updateBreweryReview, but will syncing the update with the brewery review.
    * Review delete trigger
        1. Implement deleteBreweryReview to delete the corresponding user review and aggregate the ratings on the brewery document
        3. Implement deleteUserReview to delete the corresponding brewery review as well as the brewery review mapping and aggregate the ratings on the brewery document
            * Deleting the mapping only needs to be done in one of the functions since the mapping exists only in one place, we chose to put it here but it would work fine in the deleteBreweryReview function as well
        


# Storage & Cloud Vision

Goals:
* Build the ability for a user to upload a profile image
* Build a function that will moderate the profile image using the Cloud Vision API
* Update firestore and storage rules to block a locked user from doing any add/update/delete actions

References:
* https://cloud.google.com/vision/
* https://firebase.google.com/docs/storage/web/start
* https://codelabs.developers.google.com/codelabs/firebase-cloud-functions-angular/index.html?index=..%2F..%2Findex#0

Steps:
* In progress

