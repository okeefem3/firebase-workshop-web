import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html'
})
export class BreweryComponent implements OnInit {
  brewery = {
    id: '',
    name: '',
    description: '',
    views: 0,
    averageRating: 0
  };
  reviews = [];
  breweryRef;
  reviewsRef;
  db;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Get Firestore reference
    this.db = firebase.firestore();
    // Listening to Angular route changes
    this.route.params.subscribe(params => {
      // Getting the brewery id out of the route
      const breweryId = params['id'];
      // Tell the backend this brewery was viewed
      this.postView(breweryId);
      /**
       * Get brewery document reference from Firestore and listen to changes
       */
      this.breweryRef = this.db.collection('breweries').doc(breweryId);
      this.breweryRef.onSnapshot(doc => {
        this.brewery = { ...doc.data(), id: doc.id };
      });
      /**
       * Get brewery reviews collection reference from Firestore and listen to changes
       */
      this.reviewsRef = this.breweryRef.collection('reviews');
      this.reviewsRef.onSnapshot({
        includeQueryMetadataChanges: true
      }, (snapShot) => {
        this.reviews = snapShot.docs.map((d) => {
          const data = d.data();
          const id = d.id;
          return { ...data, id: id }
        });
      });
    });
  }

  /**
   * Add a review to the reviews collection
   */
  addReview() {
    this.reviewsRef.add({
      uid: this.getCurrentUid(),
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      rating: 0
    });
  }

  /**
   * Update the given review on the reviews collection
   * @param review
   */
  saveReview(review) {
    this.breweryRef.collection('reviews').doc(review.id)
      .update({ ...review, breweryId: this.brewery.id });
  }

  /**
   * Delete the given review id from the reviews collection
   */
  deleteReview(id) {
    this.breweryRef.collection('reviews').doc(id).delete();
  }

  /**
   * Make an HTTP Post request to the functions backend to update the number of views on the given brewery
   * @param breweryId 
   */
  postView(breweryId) {
    this.http.post('https://us-central1-kla-firebase-workshop.cloudfunctions.net/httpTriggers/brewery-viewed', {
      breweryId: breweryId
    }).subscribe((data: any) => {
      console.log(`You are viewer number ${data.views}`);
    });
  }

  /**
   * You know what to do ;)
   */
  getCurrentUid() {
    return firebase.auth().currentUser.uid;
  }
}
