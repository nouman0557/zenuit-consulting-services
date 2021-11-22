import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
    this.commonSerice.routeName = 'Development'
  }

}
