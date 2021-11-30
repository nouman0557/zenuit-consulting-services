import { Component, OnInit } from '@angular/core';
import { CommomService } from '../data-services/commom.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {


  constructor(public commonSerice: CommomService) { }
  resources = [
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '"../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' }

  ]
  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: 0,
    }, 100);
    // $('nav').addClass('transparent-bg');
    this.commonSerice.routeName = 'Resources'
    this.commonSerice.navBgImg = false
  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }
}
