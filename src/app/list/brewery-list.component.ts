import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './brewery-list.component.html'
})
export class BreweryListComponent implements OnInit {
  breweryListQueryRef;
  breweryList;
  db;

  ngOnInit() {
    // Get Firestore reference
    this.db = firebase.firestore();
    // Get breweries collection reference from Firestore, querying to sort by name and listen to changes
    this.breweryListQueryRef = this.db.collection('breweries').orderBy('name');
    this.breweryListQueryRef.onSnapshot({
      includeQueryMetadataChanges: true
    }, (snapShot) => {
      this.breweryList = snapShot.docs.map((d) => {
        const data = d.data();
        const id = d.id;
        return { ...data, id: id }
      });
    });
  }

  /**
   * Add a new brewery to Firestore to breweries collection
   */
  addBrewery() {
    this.db.collection('breweries').add({
      name: 'New Brewery',
      description: 'This is a new Brewery',
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      uid: this.getCurrentUid()
    });
  }

  /**
   * Delete a brewery from Firestore breweries collection
   * @param id
   */
  deleteBrewery(id) {
    this.db.collection('breweries').doc(id).delete();
  }

  /**
   * Retrieve the uid off of the current Firebase auth user
   */
  getCurrentUid() {
    return firebase.auth().currentUser.uid;
  }
}
