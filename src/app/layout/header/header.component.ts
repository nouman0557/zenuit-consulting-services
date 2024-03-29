import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../core/data-services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarMobileOpen = false

  constructor(public _router: Router, public commonSerice: CommonService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  pagesDetails = [
    { name: 'Home', routerLink: 'home', class: '' },
    { name: 'Consulting', routerLink: 'consulting', class: '' },
    { name: 'Services', routerLink: 'services', class: '' },
    { name: 'Security', routerLink: 'security', class: '' },
    { name: 'Development', routerLink: 'development', class: '' },
    { name: 'Solutions', routerLink: 'solutions', class: '' },
    { name: 'ZCS Argon', routerLink: 'data-protection', class: '' },
    { name: 'Cybersecurity', routerLink: 'cyber-security', class: '' },
  ]

  openNavBarForMobileView() {
    this.navBarMobileOpen = !this.navBarMobileOpen
  }

  scrollDown = false;
  topPosToStartShowing = 100;
  @HostListener('scroll')

  onActive() {
    window.scroll(0, 0)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);

  }

  scroll = (): void => {
    this.scrollDown = true;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.scrollDown = true;
    } else {
      this.scrollDown = false;
    }
  };
}