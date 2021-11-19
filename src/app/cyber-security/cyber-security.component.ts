import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.scss']
})
export class CyberSecurityComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    this.commonSerice.routeName = 'Cyber Security'
  }

}
