import {Component, OnInit} from '@angular/core';
import {MesLocatairesService} from "../services/mes-locataires.service";

@Component({
  selector: 'app-mes-locataires',
  templateUrl: './mes-locataires.component.html',
  styleUrls: ['./mes-locataires.component.css']
})
export class MesLocatairesComponent implements OnInit{

  id : number = 4;

  public constructor(private locatairesServices: MesLocatairesService) {
  }

  ngOnInit(): void {
    this.getLocataires();
  }

  private getLocataires() {
    this.locatairesServices.getLocataires(this.id).subscribe(
      (data :any )=> {

      },error => {

    }
    )
  }

}
