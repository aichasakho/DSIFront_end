import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  private apiUrl = 'http://localhost:8000/api/annonces';
  private annonceUrl ='http://localhost:8000/api/locationAnnonce';
  private venteUrl ='http://localhost:8000/api/venteAnnonce';


  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getAnnonceById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getAnnonceLocation(): Observable<any> {
    return this.http.get<any>(`${this.annonceUrl}`);
  }

  getAnnonceVente(): Observable<any> {
    return this.http.get<any>(`${this.venteUrl}`);
  }


}
