import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { firestore } from '../../firebase'; // Import the Firestore instance
import { doc, getDoc, DocumentData } from 'firebase/firestore';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css'],
})
export class SingleOfferComponent implements OnInit {
  offre: any; // Single offre details
  error: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const offreId = this.route.snapshot.paramMap.get('id');
    console.log('Offre ID:', offreId); // Debugging line
    this.fetchOffreData(offreId);
  }

  fetchOffreData(offreId: any): void {
    const offreDocRef = doc(firestore, 'offers', offreId);

    getDoc(offreDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as DocumentData;
          data['id'] = docSnapshot.id; // Assign the document ID
          this.offre = data;
          console.log(this.offre);
        } else {
          console.log('Offre not found');
        }
      })
      .catch((error) => {
        this.error = error;
      });
  }
}
