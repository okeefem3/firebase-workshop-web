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

    // Get breweries collection reference from Firestore, querying to sort by name and listen to changes
  }

  /**
   * Add a new brewery to Firestore to breweries collection
   */
  addBrewery() {
    
  }

  /**
   * Delete a brewery from Firestore breweries collection
   * @param id
   */
  deleteBrewery(id) {
    
  }

  /**
   * Retrieve the uid off of the current Firebase auth user
   */
  getCurrentUid() {
    
  }
}
