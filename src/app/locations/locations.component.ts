import { Component } from '@angular/core';
import {AnnoncesService} from "../services/annonces.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  annonces: any[] = []; // Remplacez par votre type d'annonce

  constructor(private annonceService: AnnoncesService) {}

  ngOnInit(): void {
    this.fetchAnnonces();
    this.getAnnonceLocation();

  }

  fetchAnnonces() {
    // Exemple d'initialisation des annonces
    this.annonces = [
      // Vos données d'annonces ici
    ];
  }

  getAnnonceLocation() {
    this.annonceService.getAnnonceLocation().subscribe(data => {
      console.log('Annonces data:', data);
      this.annonces = data;
    }, error => {
      console.error('Error fetching annonces', error);
    });
  }
}
