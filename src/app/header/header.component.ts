import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarMobileOpen = false

  constructor(public _router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter

  }

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
