import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienImmobilierComponent } from './bien-immobilier/bien-immobilier.component';
import { AcceuilsComponent } from './acceuils/acceuils.component';
import { AnnoncesComponent } from './annonces/annonces.component'; // Correct component
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'biens', component: BienImmobilierComponent },
  { path: 'annonces', component: AnnoncesComponent }, // Correct component
  { path: 'acceuil', component: AcceuilsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: '/annonces', pathMatch: 'full' },
  { path: '**', redirectTo: '/annonces' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
