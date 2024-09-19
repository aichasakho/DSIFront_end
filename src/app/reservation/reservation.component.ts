import { Component } from '@angular/core';
import { ReservationService } from  '../services/reservation.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationForm: FormGroup;
  reservation = {
    date_debut: '',
    date_fin: '',
    profession: '',
    situation_matrimonial: '',
    client_nom: '',
    bien_immobilier_id: ''
  };
  // private notyf = new Notyf({
  //   duration: 3000, // Durée d'affichage de la notification
  //   ripple: true,   // Effet ripple
  //   position: {
  //     x: 'right',
  //     y: 'top',
  //   },
  // });


  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
  ) {
    this.reservationForm = this.fb.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      profession: ['', Validators.required],
      situation_matrimonial: ['', Validators.required],
      client_nom: ['', Validators.required],
      bien_immobilier_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      this.reservationService.getReservation().subscribe({
        next: (response) => {
          console.log('reservation effectuer avec succès:', response);
          alert('reservation envoyer avec succès'); // Notification de succès
          // this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erreur lors de la reservation:', error);
          alert('Une erreur est survenue lors de l\'envoie pour la reservation'); // Notification d'erreur
        }
      });
    } else {
      console.log('Formulaire invalide');
        alert('Formulaire invalide. Veuillez remplir tous les champs requis.'); // Notification d'erreur pour formulaire invalide
    }
  }

}

