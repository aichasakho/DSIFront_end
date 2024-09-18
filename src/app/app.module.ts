import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienImmobilierComponent } from './bien-immobilier/bien-immobilier.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AcceuilsComponent } from './acceuils/acceuils.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    BienImmobilierComponent,
    AnnoncesComponent,
    AcceuilsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
