import { Component, OnInit } from '@angular/core';
import { CommomService } from '../core/data-services/commom.service';
import { ResourcesService } from '../core/data-services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {


  constructor(
    public commonSerice: CommomService,
    private resourcesService: ResourcesService
  ) { }
  resources = [
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' },
    { imgUrl: '../../assets/images/resources/res-img.png', title: 'Lorem ipsum dolor sit amet, consectetur ', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental to organizations, alongside their customers, leads' }

  ]

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0, }, 100);
    this.commonSerice.routeName = 'Resources'
    this.commonSerice.navBgImg = false
    this.getResourcesTags()


  }
  showLodaer = false
  getResourcesTags() {
    this.showLodaer = true
    //First we check the is data already available in the service?
    let test: any
    // if (this.commonSerice.isObjectEmpty(test)) {
    this.resourcesService.getResourcesTags().then((projects: any) => {
      this.showLodaer = false

    }).catch((err: any) => {
      this.showLodaer = false
      console.log('This is error from RES Tag Promise-->', err);
    });



    // }
    //  else {
    //   this.showLodaer = false
    // }

  }

  getResourcesList() {

  }
  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }
}
