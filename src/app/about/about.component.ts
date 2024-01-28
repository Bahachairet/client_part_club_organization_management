import { Component, OnInit } from '@angular/core';
import { firestore } from '../../firebase';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  teamsList: any[] = [];

  error: any;
 

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Reference to the 'teams', 'sponsors', and 'offers' collections in Firestore
    const teamsCollectionRef = collection(firestore, 'teams');


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


}
}

