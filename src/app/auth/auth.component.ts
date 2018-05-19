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
   * Sign in to Firebase auth with the Facebook provider
   */
  signInWithFacebook() {
    
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
   * Convert the anonymous user data to a google account
   */
  convertAnonymousToGoogle() {
    
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
  private linkAccountWithCredential(credential) {
    
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

  /**
   * Helper function to create a Firebase Google auth provider with custom parameters
   */
  createGoogleAuthProvider() {
    
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
}
