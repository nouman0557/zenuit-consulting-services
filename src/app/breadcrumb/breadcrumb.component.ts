import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    public commonSerice: CommomService
  ) { }

  routeName = ''
  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
  }

}
