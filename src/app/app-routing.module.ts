import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienImmobilierComponent } from './bien-immobilier/bien-immobilier.component';
import { AcceuilsComponent } from './acceuils/acceuils.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DetailComponent } from './detail/detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { VisiteComponent } from './visite/visite.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VentesComponent } from './ventes/ventes.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  { path: 'biens', component: BienImmobilierComponent },
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'acceuil', component: AcceuilsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'reserver', component: ReservationComponent },
  { path: 'visite', component: VisiteComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'ventes', component: VentesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/annonces', pathMatch: 'full' },
  { path: '**', redirectTo: '/annonces' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
