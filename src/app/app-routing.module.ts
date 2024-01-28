import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarindexComponent } from './navbarindex/navbarindex.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { OffreComponent } from './offre/offre.component';
import { SingleActualiteComponent } from './single-actualite/single-actualite.component';
import { SingleProjetComponent } from './single-projet/single-projet.component';
import { SingleOfferComponent } from './single-offer/single-offer.component';
const routes: Routes = [

  { path: 'actualite/:id', component: SingleActualiteComponent },
  { path: 'projet/:id', component: SingleProjetComponent },
  { path: 'offre/:id', component: SingleOfferComponent },
  { path: 'navbar', component:NavbarindexComponent  },
  { path: 'adhesion', component: AdhesionComponent },
  { path: '', component:IndexComponent  },
  { path: 'about', component:AboutComponent  },
  { path: 'footer', component:FooterComponent  },
  { path: 'projet', component:ProjetComponent  },
  { path: 'contact', component:ContactComponent  },
  { path: 'actualite', component:ActualiteComponent  },
  { path: 'about', component: AboutComponent },
  {path:'offre', component:OffreComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
