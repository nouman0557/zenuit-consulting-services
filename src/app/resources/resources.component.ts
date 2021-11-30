import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {


  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    // $('nav').addClass('transparent-bg');
    this.commonSerice.routeName = 'Resources'
    this.commonSerice.navBgImg = false
  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }
}
