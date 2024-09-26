import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  annonces: any[] = []; // Remplacez par votre type d'annonce

  constructor() {}

  ngOnInit(): void {
    this.fetchAnnonces();
  }

  fetchAnnonces() {
    // Exemple d'initialisation des annonces
    this.annonces = [
      // Vos données d'annonces ici
    ];
  }
}
