import { Component, OnInit } from '@angular/core';
import { firestore } from '../../firebase'; // Import the firestore instance
import { collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  pList: any[] = [];
  error: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Reference to the 'projects' collection in Firestore
    const projectsCollectionRef = collection(firestore, 'projects');
  
    // Get the documents from the collection
    getDocs(projectsCollectionRef).then(
      (querySnapshot) => {
        this.pList = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
          // Include the Document ID in the data
          const data = doc.data();
          data['id'] = doc.id; // Use square bracket notation
          return data;
        });
        console.log(this.pList);
      },
      (error) => {
        this.error = error;
      }
    );
  }
  
}
