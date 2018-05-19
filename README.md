Starter code for the firebase workshop!

Stackblitz link
https://stackblitz.com/github/okeefem3/firebase-workshop-web/tree/connect-to-firebase

Or if you followed the directions to set up your development environment, just clone the project and checkout the connect-to-firebase branch.

Some useful references for this section:
* https://firebase.google.com/
* https://firebase.google.com/docs/web/setup
* https://nodejs.org/en/
* https://firebase.google.com/docs/cli/

Steps:
* Initialize a firebase project
* Copy and paste the Firebase web config key/value pairs into the object defined in ./src/config/firebase.config.ts
* Initialize the firebase app in the app.module.ts file
* Setup Firebase CLI (We will use this later to deploy to hosting and cloud functions)
    1. Install Node LTS https://nodejs.org/en/
    2. Open a terminal on your machine and run `npm install -g firebase-tools`
    3. run `firebase login` and login with the SAME account that you used to create your Firebase project
        * GOTCHA, if you have multiple google accounts be sure that you use the same one as you used to create your Firebase project
