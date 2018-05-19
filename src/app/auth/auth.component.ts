import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  public email = "";
  public password = "";
  public exampleText = 'example function parameter';

  /**
   * Example click listener function to show how this is done in Angular
   */
  exampleClickFunction() {
    alert(this.exampleText);
  }

  /**
   * Create a Firebase auth user with a given email and password
   */
  createUserWithEmailAndPassword() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        debugger;
        console.log(user);
      })
      .catch((error) => {
        alert('Error signing user up with email and password! ' +  error.code + ': ' + error.message);
      });
  }

  /**
   * Sign in to Firebase auth with the given username and password
   */
  signInWithEmailAndPassword() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then((user) => console.log(user))
      .catch((error) => {
        console.log(error);
        alert('Email and password combo does not exist! Please sign up :)');
      });
  }

  /**
   * Sign in to Firebase auth with the Google provider
   */
  signInWithGoogle() {
    const provider = this.createGoogleAuthProvider();
    this.signInWithPopup(provider);
  }

  /**
   * Helper function to create a Firebase Google auth provider with custom parameters
   */
  createGoogleAuthProvider() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Allow user to pick if they have multiple accounts
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    return provider;
  }

  /**
   * Generic helper function, pass it a Firebase auth provider and 
   * handle signing in with a popup.
   * @param provider to sign in with
   */
  signInWithPopup(provider) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      alert('There was an error authenticating ' + email + ' with ' + provider.providerId + '\n\n' + errorMessage);
    });
  }

  /**
   * Sign in to Firebase auth anonymously using the user IP
   */
  signInAnonymously() {
    firebase.auth().signInAnonymously().catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('There was an error signing in anonymously, maybe you should not try to be sneaky' + '\n\n' + error.message);
    });
  }

  /**
   * Convert the anonymous user data to a google account
   */
  convertAnonymousToGoogle() {
    const credential = firebase.auth.GoogleAuthProvider.credential();
    this.linkAccountWithCredential(credential);
  }

  /**
   * Convert the anonymous user data to an email/password account
   */
  convertAnonymousToEmailAndPassword() {
    const credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
    this.linkAccountWithCredential(credential);
  }

  /**
   * Helper function to show that the user was signed in successfully
   * @param user 
   */
  signInSuccessful(user) {
    alert('Successfully signed in as ' + user.displayName);
  }

  /**
   * Sign out of Firebase auth
   */
  signOut() {
    firebase.auth().signOut();
  }

  /**
   * Retrieve the current user from Firebase auth
   */
  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  /**
   * BONUS 
   * Complete these on your own if you like, consult the docs or 
   * our finished code for help.
   */

  /**
   * Sign in to Firebase auth with the Facebook provider
   * HINT You will need to obtain API credentials from Facebook for this.
   */
  signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    this.signInWithPopup(provider);
  }

  /**
   * Generic helper function to link the current user with the given auth credentials
   * Use to convert an anonymours user to a different auth type
   * @param credential 
   */
  private linkAccountWithCredential(credential) {
    firebase.auth().currentUser.linkWithCredential(credential).then((user) => {
      this.signInSuccessful(user);
    }, (error) => {
      console.log("Error upgrading anonymous account", error);
    });
  }

  /**
   * Link an existing Firebase non anonymous user to a Google sign in
   */
  linkAccountToGoogle() {
    const provider = this.createGoogleAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider).then(function(result) {
      // Accounts successfully linked.
      var credential = result.credential;
      var user = result.user;
      console.log("Account linking to Google success", user);
    }).catch((error) => {
      console.log("Account linking to Google error", error);
    });
  }

  /**
   * Link an existing Firebase non anonymous user to an email/password sign in
   */
  linkAccountToEmailAndPassword() {
    const credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password);
    firebase.auth().currentUser.linkWithCredential(credential).then((user) => {
      console.log("Account linking to email/password success", user);
    }, (error) => {
      console.log("Account linking to email/password error", error);
    });
  }
}
