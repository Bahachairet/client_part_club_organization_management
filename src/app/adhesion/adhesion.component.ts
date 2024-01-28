import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent  implements OnInit {
  registrationForm!: FormGroup;
  // List of allowed nationalities
  nationalityOptions = ['Tounsi'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      surname: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      birthdate: ['', Validators.required],
      nationality: ['', [Validators.required, this.validateNationality]],
      // Add other form controls here...
    });
  }

  get nameControl() {
    return this.registrationForm.get('name');
  }

  get surnameControl() {
    return this.registrationForm.get('surname');
  }

  get emailControl() {
    return this.registrationForm.get('email');
  }

  get phoneNumberControl() {
    return this.registrationForm.get('phoneNumber');
  }

  get nationalityControl() {
    return this.registrationForm.get('nationality');
  }

  validateNationality(control: any) {
    const allowedNationality = 'Tounsi';
    return control.value === allowedNationality ? null : { invalidNationality: true };
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      // Form is valid, handle the form submission here
      console.log(this.registrationForm.value);
    } else {
      // Form is invalid, show error messages or take appropriate action
    }
  }
}
