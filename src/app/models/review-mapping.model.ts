export interface ReviewMapping {
  id: string; // Unique id created manually as breweryId_uid the two ids being ids of the parent Brewery and User Documents
  reviewId: string; // We really are only needing to check if this exists for this example, so we are just saving the reviewId
}
