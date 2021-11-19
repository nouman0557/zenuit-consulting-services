import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    this.commonSerice.routeName = 'Consulting'
  }

}
