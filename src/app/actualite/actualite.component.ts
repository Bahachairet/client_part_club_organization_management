import { Component, OnInit } from '@angular/core';
import { firestore } from '../../firebase'; // Import the Firestore instance
import { collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  actualiteList: any[] = [];
  error: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Reference to the 'actualite' collection in Firestore
    const actualiteCollectionRef = collection(firestore, 'actualites');
  
    // Get the documents from the collection
    getDocs(actualiteCollectionRef).then(
      (querySnapshot) => {
        this.actualiteList = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id; // Use square bracket notation
          return data;
        });
        console.log(this.actualiteList);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
