import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from '../services/bien-immobilier.service';

@Component({
  selector: 'app-bien-immobilier',
  templateUrl: './bien-immobilier.component.html',
  styleUrls: ['./bien-immobilier.component.css']
})
export class BienImmobilierComponent implements OnInit {
  biens: any[] = [];

  constructor(private bienService: BienImmobilierService) {}

  ngOnInit(): void {
    this.bienService.getAll().subscribe(data => {
      this.biens = data;
    });
  }
}
