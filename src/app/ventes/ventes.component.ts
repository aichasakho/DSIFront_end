import { Component } from '@angular/core';
import {AnnoncesService} from "../services/annonces.service";

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent {
  annonces: any[] = []; // Remplacez par votre type d'annonce

  constructor(private annonceService: AnnoncesService) {}

  ngOnInit(): void {
    this.fetchAnnonces();
    this.getAnnonceVente();

  }

  fetchAnnonces() {
    // Exemple d'initialisation des annonces
    this.annonces = [
      // Vos données d'annonces ici
    ];
  }

  getAnnonceVente() {
    this.annonceService.getAnnonceVente().subscribe(data => {
      console.log('Annonces data:', data);
      this.annonces = data;
    }, error => {
      console.error('Error fetching annonces', error);
    });
  }
}

