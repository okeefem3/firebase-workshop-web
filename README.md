Starter code for the firebase workshop!

Stackblitz link
https://stackblitz.com/github/okeefem3/firebase-workshop-web/tree/connect-to-firebase

Or if you followed the directions to set up your development environment, just clone the project and checkout the connect-to-firebase branch.

# Connect An App To Firebase

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

References:
* https://firebase.google.com/docs/auth/web/start

Steps:
* Go to your Firebase project console https://console.firebase.google.com/
    1. Select Authentication from the menu
    2. Select the SIGN-IN METHOD tab
    3. Enable Email/Password (if needed) Google and Anonymous
* In the the auth/auth.component.ts file implement sign up/in code for these three methods

