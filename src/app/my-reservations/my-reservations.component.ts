import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {MyReservationsService} from "../services/my-reservations.service";

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit{
  reservations: any = [];
  userId : string | null;

  public constructor(
    private loginService: LoginService,
    private myResService: MyReservationsService,
  ) {
    this.userId = this.loginService.getUserId();
  }

  ngOnInit() {
    this.myReservations(this.userId);
  }

  myReservations(id: string|null) {
    this.myResService.getMyReservations(id).subscribe(data => {
      console.log('my Reservations', data);
      this.reservations = data;
    }, error => {
      console.error('Error fetching reserations', error);
    });
  }
}
