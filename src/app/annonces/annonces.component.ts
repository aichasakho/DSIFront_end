import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: any[] = [];

  constructor(private annonceService: AnnoncesService) {}

  ngOnInit(): void {
    this.getAnnonces();
  }

  getAnnonces() {
    this.annonceService.getAll().subscribe(data => {
      console.log('Annonces data:', data);
      this.annonces = data;
    }, error => {
      console.error('Error fetching annonces', error);
    });
  }



}
