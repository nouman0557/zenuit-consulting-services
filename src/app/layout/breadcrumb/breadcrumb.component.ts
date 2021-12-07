import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../core/data-services/common.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    public commonSerice: CommonService
  ) { }

  routeName = ''
  ngOnInit(): void { }

}
