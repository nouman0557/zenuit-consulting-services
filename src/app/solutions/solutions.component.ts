import { Component, OnInit } from '@angular/core';
import { CommomService } from '../core/data-services/commom.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    this.commonSerice.routeName = 'Solutions'
  }

}
