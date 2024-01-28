import { Component, OnInit } from '@angular/core';
import { firestore } from '../../firebase';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  teamsList: any[] = [];
  sponsorsList: any[] = [];
  offersList: any[] = [];
  filteredOffers: any[] = []; // Filtered offers list for display
  error: any;
  selectedType: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Reference to the 'teams', 'sponsors', and 'offers' collections in Firestore
    const teamsCollectionRef = collection(firestore, 'teams');
    const sponsorsCollectionRef = collection(firestore, 'sponsors');
    const offersCollectionRef = collection(firestore, 'offers');

    // Fetch data for 'teams' collection
    getDocs(teamsCollectionRef).then(
      (querySnapshot) => {
        this.teamsList = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
      },
      (error) => {
        this.error = error;
      }
    );

    // Fetch data for 'sponsors' collection
    getDocs(sponsorsCollectionRef).then(
      (querySnapshot) => {
        this.sponsorsList = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
      },
      (error) => {
        this.error = error;
      }
    );

    // Fetch data for 'offers' collection
    getDocs(offersCollectionRef).then(
      (querySnapshot) => {
        // Sort the documents by document ID to get the latest ones
        const sortedDocs = querySnapshot.docs.sort((a, b) =>
          a.id.localeCompare(b.id)
        );
        // Get the latest 3 documents
        const latestOffers = sortedDocs.slice(-3);
  
        this.offersList = latestOffers.map((doc: QueryDocumentSnapshot) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        // Initialize filtered offers
        this.filteredOffers = this.offersList;
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
