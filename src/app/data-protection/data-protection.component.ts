import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    this.commonSerice.routeName = 'Data Protection'
  }

}
