import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean = false;
  isScrolled: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 100; // Adjust scroll threshold as needed
  }

  checkAuthentication() {
    this.isAuthenticated = !!localStorage.getItem('authToken');
  }

  logout() {
    // Remove token from local storage
    localStorage.removeItem('authToken');

    // Update the isAuthenticated variable
    this.isAuthenticated = false;

    // Redirect to homepage or login page
    this.router.navigate(['/']);
  }
}
