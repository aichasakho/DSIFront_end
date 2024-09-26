import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isCliForm: boolean = true;
  registerForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
      cni: ['', Validators.required]
    })
  }

  showCliForm() {
    this.isCliForm = true
  }

  showPropForm() {
    this.isCliForm = false
  }

  onSubmit() {

  }
}
