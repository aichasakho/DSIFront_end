import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  annonce: any;

  constructor(private route: ActivatedRoute, private annoncesService: AnnoncesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getAnnonceDetail(id);
    }
  }

  getAnnonceDetail(id: string) {
    console.log('Fetching details for annonce ID:', id);
    this.annoncesService.getAnnonceById(id).subscribe(data => {
      console.log('Annonce details:', data);
      this.annonce = data;
    }, error => {
      console.error('Error fetching annonce detail', error);
    });
  }

  reserve(id: number) {
    console.log('Réserver clicked for annonce ID:', id);
  }

  visit(id: number) {
    console.log('Visiter clicked for annonce ID:', id);
  }
}
