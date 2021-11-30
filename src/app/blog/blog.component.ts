import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    $('nav').removeClass('bg-faded');
    this.commonSerice.routeName = 'Zenuit Blog'
    this.commonSerice.navBgImg = false
  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }
}
