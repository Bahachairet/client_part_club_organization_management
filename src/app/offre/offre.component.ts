import { Component, OnInit } from '@angular/core';
import { firestore } from '../../firebase';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offersList: any[] = [];
  filteredOffers: any[] = []; // Filtered offers list for display
  error: any;
  selectedType: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Reference to the 'offers' collection in Firestore
    const offersCollectionRef = collection(firestore, 'offers');

    // Get the documents from the collection
    getDocs(offersCollectionRef).then(
      (querySnapshot) => {
        this.offersList = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        // Initialize filtered offers
        this.filteredOffers = this.offersList;
        console.log(this.offersList);
      },
      (error) => {
        this.error = error;
      }
    );
  }

  filterByType(type: string): void {
    // Filter offers based on the selected type
    this.selectedType = type;
    this.filteredOffers = this.offersList.filter((offer) => offer.type === type);
  }

  resetFilter(): void {
    // Reset the filter to display all offers
    this.selectedType = null;
    this.filteredOffers = this.offersList;
  }
}
