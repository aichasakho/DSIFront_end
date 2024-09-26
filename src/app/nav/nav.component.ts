import {Component, HostListener, OnInit} from '@angular/core';
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {}

    protected readonly provideRouter = provideRouter;
  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Change la valeur en fonction de la position de défilement
    this.isScrolled = scrollPosition > 100; // Change ici la valeur si tu veux déclencher plus tôt ou plus tard
  }
}
