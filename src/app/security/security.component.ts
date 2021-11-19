import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    this.commonSerice.routeName = 'security'
  }

}
