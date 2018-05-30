import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  public email = '';
  public password = '';
  public exampleText = 'example function parameter';

  /**
   * References:
   * https://firebase.google.com/docs/auth/web/start
   * https://firebase.google.com/docs/reference/js/firebase.User
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#getRedirectResult
   * https://firebase.google.com/docs/auth/web/manage-users
   */

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

  }

  /**
   * Sign in to Firebase auth with the given username and password
   */
  signInWithEmailAndPassword() {

  }

  /**
   * Sign in to Firebase auth with the Google provider
   */
  signInWithGoogle() {

  }

  /**
   * Helper function to create a Firebase Google auth provider with custom parameters
   */
  createGoogleAuthProvider() {

  }

  /**
   * Generic helper function, pass it a Firebase auth provider and
   * handle signing in with a popup.
   * @param provider to sign in with
   */
  signInWithPopup(provider) {

  }

  /**
   * Sign in to Firebase auth anonymously using the user IP
   */
  signInAnonymously() {

  }

  /**
   * Convert the anonymous user data to an email/password account
   */
  convertAnonymousToEmailAndPassword() {

  }

  /**
   * Generic helper function to link the current user with the given auth credentials
   * Use to convert an anonymours user to a different auth type
   * @param credential
   */
  linkAccountWithCredential(credential) {

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

  }

  /**
   * Retrieve the current user from Firebase auth
   */
  getCurrentUser() {

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

  }

  /**
   * Convert the anonymous user data to a google account
   */
  convertAnonymousToGoogle() {

  }

  /**
   * Link an existing Firebase non anonymous user to a Google sign in
   */
  linkAccountToGoogle() {

  }

  /**
   * Link an existing Firebase non anonymous user to an email/password sign in
   */
  linkAccountToEmailAndPassword() {

  }
}
