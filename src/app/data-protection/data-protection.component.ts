import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/data-services/commom.service';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor(public commonSerice: CommonService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    this.commonSerice.routeName = 'Data Protection'
  }

}
