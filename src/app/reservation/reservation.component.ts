import { Component } from '@angular/core';
import { ReservationService } from  '../services/reservation.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
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
  bienId: string | null;


  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: ActivatedRoute
  ) {
    this.bienId = this.router.snapshot.paramMap.get('id');

    this.reservationForm = this.fb.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      profession: ['', Validators.required],
      situation_matrimonial: ['', Validators.required],
      client_id: [3, Validators.required],
      client_nom: ['', Validators.required],
      bien_immobilier_id: [this.bienId, Validators.required],
    });

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form Status:', this.reservationForm.status);
    console.log('Form Values:', this.reservationForm.value);
    console.log('Form Errors:', this.reservationForm.errors);

    if (this.reservationForm.valid) {
      this.reservationService.createReservation(this.reservationForm.value).subscribe(
        response => {
          console.log('Reservation successful', response);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 422) {
            console.error('Validation errors:', error.error.errors);
          } else {
            console.error('Other error:', error);
          }
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }




}

