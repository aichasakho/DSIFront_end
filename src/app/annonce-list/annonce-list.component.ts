import { Component, Input, OnInit } from '@angular/core';

interface Annonce {
  id: number;
  type_biens: string;
  type_annonce: string;
  description: string;
  prix: string;
  superficie: number;
  bien_immobilier: {
    image: string;
  };
}

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  @Input() annonces: Annonce[] = [];
  @Input() type_bien: string = '';
  filteredAnnonces: Annonce[] = [];

  ngOnInit() {
    this.filterAnnonces();
  }

  ngOnChanges() {
    this.filterAnnonces(); // Refiltrez si les annonces ou le type_bien changent
  }

  filterAnnonces() {
    this.filteredAnnonces = this.annonces.filter(a => a.type_biens === this.type_bien);
  }
}
