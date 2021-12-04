import { Component, OnInit } from '@angular/core';
import { CommomService } from '../core/data-services/commom.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor(public commonSerice: CommomService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    this.commonSerice.routeName = 'Consulting'
  }

}
