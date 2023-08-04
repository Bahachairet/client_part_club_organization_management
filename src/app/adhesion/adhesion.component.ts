import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent {
  formData = {
    fullName: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: null,
    checkMe: false,
    message: ''
  };

  nationalityOptions: string[] = [
    'Tounsi',
    'Fransaoui',
    'Canadi',
    'Marroci',
    'Libi',
    'Dziri',
    'Amarici',
    'Mouritani',
    'Itali',
    // Add more nationalities as needed
  ];
}