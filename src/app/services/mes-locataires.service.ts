import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MesLocatairesService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/mes-locataires';

  getLocataires(id: number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
