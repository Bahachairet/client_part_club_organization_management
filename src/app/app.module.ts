// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AdhesionComponent
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
    MatNativeDateModule
    
    
    // Import FooterModule here
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
