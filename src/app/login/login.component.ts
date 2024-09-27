import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Valeurs du formulaire avant l\'envoi:', this.loginForm.value);
      this.http.post('http://localhost:8000/api/login', this.loginForm.value).subscribe(
        response => {
          console.log('Connexion réussie:', response);
          this.errorMessage = null;
        },
        error => {
          if (error.status === 422) {
            console.error('Validation errors:', error.error.errors);
          } else {
            console.error('An error occurred:', error);
          }
        }
      );
    } else {
      console.log('Le formulaire est invalide');
    }
  }


}
