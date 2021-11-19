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
    this.commonSerice.routeName = 'Development'
  }

}
