import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyReservationsService {
  private apiUrl = 'http://localhost:8000/api/my-reservation';


  constructor(private http: HttpClient) {}

  getMyReservations(id: any): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
