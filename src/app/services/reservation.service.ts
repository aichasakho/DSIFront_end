import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/reservation';


  createReservation(reservation : any): Observable<any> {
    return this.http.post(this.apiUrl,reservation);
  }
}
