import { Component, OnInit } from '@angular/core';
import { CommomService } from '../core/data-services/commom.service';

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
    }, 100);
    this.commonSerice.routeName = 'Development'
  }

}
