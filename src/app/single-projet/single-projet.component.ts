import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firestore } from '../../firebase'; // Import the firestore instance
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { format } from "date-fns";

@Component({
  selector: 'app-single-projet',
  templateUrl: './single-projet.component.html',
  styleUrls: ['./single-projet.component.css']
})
export class SingleProjetComponent implements OnInit {
  project: any; // Single project details
  error: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project ID:', projectId); // Debugging line
    this.fetchProjectData(projectId);
  }

  fetchProjectData(projectId: any): void {
    const projectDocRef = doc(firestore, 'projects', projectId);

    getDoc(projectDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as DocumentData;
          data['id'] = docSnapshot.id; // Assign the document ID
          this.project = data;
          console.log(this.project);
        } else {
          console.log('Project not found');
        }
      })
      .catch((error) => {
        this.error = error;
      });
  }
}
