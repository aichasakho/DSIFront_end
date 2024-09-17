import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienImmobilierComponent } from './bien-immobilier/bien-immobilier.component';
import { AcceuilsComponent } from './acceuils/acceuils.component';
import {AnnoncesService} from "./services/annonces.service";

const routes: Routes = [
  { path: 'biens', component: BienImmobilierComponent },
  { path: 'annonces', component: AnnoncesService },
  { path: 'acceuil', component: AcceuilsComponent },
  { path: '', redirectTo: '/acceuils', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
