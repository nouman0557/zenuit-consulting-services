import { Component, OnInit } from '@angular/core';
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
  }

  openNavBarForMobileView() {
    this.navBarMobileOpen = !this.navBarMobileOpen
  }



}
