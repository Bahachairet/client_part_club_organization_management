// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { OffreComponent } from './offre/offre.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { FooterModule } from './footer/footer.module'; // Import FooterModule here
import { MatNativeDateModule } from '@angular/material/core';
import { SingleActualiteComponent } from './single-actualite/single-actualite.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SingleProjetComponent } from './single-projet/single-projet.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from '../firebase';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleOfferComponent } from './single-offer/single-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    IndexComponent,
    ContactComponent,
    ProjetComponent,
    ActualiteComponent,
    OffreComponent,
    AdhesionComponent,
    SingleActualiteComponent,
    SingleProjetComponent,
    SingleOfferComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FooterModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Import FooterModule here
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'FirestoreInstance', useValue: firestore } // Provide Firestore instance
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
