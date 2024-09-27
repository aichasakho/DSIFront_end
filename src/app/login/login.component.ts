import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:8000/api/login', this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Login successful:', response);

          // Save token in local storage
          localStorage.setItem('authToken', response.token);

          this.errorMessage = null;

          // Redirect to homepage or intended page after login
          this.router.navigate(['/']);
        },
        error => {
          if (error.status === 422) {
            console.error('Validation errors:', error.error.errors);
            this.errorMessage = 'Validation failed: ' + JSON.stringify(error.error.errors);
          } else {
            console.error('Unexpected error:', error);
            this.errorMessage = 'An unexpected error occurred.';
          }
        }
      );
    } else {
      console.log('Form is invalid:', this.loginForm);
    }
  }
}
