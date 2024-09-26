import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BienImmobilierComponent } from './bien-immobilier/bien-immobilier.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AcceuilsComponent } from './acceuils/acceuils.component';
import { DetailComponent } from './detail/detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { VisiteComponent } from './visite/visite.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LocationsComponent } from './locations/locations.component';
import { VentesComponent } from './ventes/ventes.component';
import { ReglementComponent } from './reglement/reglement.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BienImmobilierComponent,
    AnnoncesComponent,
    AcceuilsComponent,
    DetailComponent,
    ReservationComponent,
    VisiteComponent,
    ContactsComponent,
    LocationsComponent,
    VentesComponent,
    ReglementComponent,
    AnnonceListComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
