import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../services/annonces.service';
import { LoginService } from '../services/login.service'; // Import the LoginService

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  annonce: any;
  showReservationForm = false;
  showVisiteurForm = false;
  reservation = {
    date_debut: '',
    date_fin: '',
    profession: '',
    situation_matrimonial: "",
    client_nom: "",
    bien_immobilier_id: ""
  };

  constructor(
    private route: ActivatedRoute,
    private annoncesService: AnnoncesService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getAnnonceDetail(id);
    }
  }

  getAnnonceDetail(id: string) {
    this.annoncesService.getAnnonceById(id).subscribe(data => {
      this.annonce = data;
    }, error => {
      console.error('Error fetching annonce detail', error);
    });
  }

  toggleReservationForm() {
    this.showReservationForm = !this.showReservationForm;
  }

  toggleVisiteForm() {
    this.showVisiteurForm = !this.showVisiteurForm;
  }

  submitReservation() {
    console.log('Réservation soumise:', this.reservation);
    this.reservation = {
      date_debut: '',
      date_fin: '',
      profession: '',
      situation_matrimonial: "",
      client_nom: "",
      bien_immobilier_id: ""
    };
    this.showReservationForm = false;
    this.showVisiteurForm = false;
  }

  submitVisite() {
    this.reservation = {
      date_debut: '',
      date_fin: '',
      profession: '',
      situation_matrimonial: "",
      client_nom: "",
      bien_immobilier_id: ""
    };
    this.showReservationForm = false;
    this.showVisiteurForm = false;
  }

  reserver(id: number) {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/reserver/' + id]);
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/reserver/' + id } });
    }
  }


  visit(id: number) {
    console.log('Visiter clicked for annonce ID:', id);
  }
}
