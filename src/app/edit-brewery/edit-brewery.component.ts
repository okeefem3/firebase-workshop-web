import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-edit-brewery',
  templateUrl: './edit-brewery.component.html'
})
export class EditBreweryComponent implements OnInit {
  brewery = {
    id: '',
    name: '',
    description: ''
  };
  breweryRef;
  db;

  /**
   * Angular uses constructors for dependency injection
   * @param route the current route handled by the Angular router
   */
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
  }

  /**
   * Update the brewery document 
   */
  saveBrewery() {
    
  }

  // Ignore me this bit is to make some materialize styling work with angular template binding :)
  decideLabelClass(prop) {
    return prop && prop !== '' ? 'active' : '';
  }
}
