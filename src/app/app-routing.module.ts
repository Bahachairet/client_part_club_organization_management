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


const routes: Routes = [
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
