import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * A 'dumb' component for viewing and editing reviews that does not interact with firebase
 */
@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  @Input() review;
  @Input() currentUserId;
  @Output() reviewSaved = new EventEmitter();
  @Output() reviewDeleted = new EventEmitter();

  stars = [1, 2, 3, 4, 5];
  editing = false;

  decideLabelClass(prop) {
    return prop && prop !== '' ? 'active' : '';
  }

  decideStar(rating, starNumber) {
    return rating && rating >= starNumber ? 'star' : 'star_border';
  }

  onSave() {
    this.reviewSaved.next(this.review);
  }

  onDelete() {
    this.reviewDeleted.next(this.review.id);
  }

  onEdit() {
    this.editing = true;
  }

  onCancel() {
    this.editing = false;
  }
}
