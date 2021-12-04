import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/data-services/commom.service';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.scss']
})
export class CyberSecurityComponent implements OnInit {

  partnersData = [
    {
      imageUrl: '../../assets/images/cyber-security/partner-logo-1.png',
      headingText: 'Prisma Cloud',
      subHeadingText: ' - Threat Detection'
    },
    {
      imageUrl: '../../assets/images/cyber-security/partner-logo-2.png',
      headingText: 'Darktrace',
      subHeadingText: ' - The Enterprise Immune System'
    },
    {
      imageUrl: '../../assets/images/cyber-security/partner-logo-3.png',
      headingText: 'SentinelOne',
      subHeadingText: ' - Singularity Core'
    },
    {
      imageUrl: '../../assets/images/cyber-security/partner-logo-4.png',
      headingText: 'SentinelOne',
      subHeadingText: ' - Singularity XDR'
    },


  ]
  constructor(public commonSerice: CommonService) { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    this.commonSerice.routeName = 'Cyber Security'
  }

}
