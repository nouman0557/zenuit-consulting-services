import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../core/data-services/commom.service';
import { ResourcesService } from '../core/data-services/resources.service';
import { API_ENDPOINTS } from '../http/api-end-points';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {


  constructor(
    public commonSerice: CommonService,
    private resourcesService: ResourcesService
  ) { }

  resourcesType: any
  resourcesList: any
  selectedType: any
  tempImage = '../../assets/images/no-image-available.jpg'

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0, }, 100);
    this.commonSerice.routeName = 'Resources'
    this.commonSerice.navBgImg = false
    this.getResourcesType()
  }

  showLodaer = false
  getResourcesType() {
    this.showLodaer = true
    this.resourcesService.getResourcesType().then((types: any) => {
      this.showLodaer = false
      console.log('Resources Tags API res-->', types)
      if (!this.commonSerice.isObjectEmpty(types)) {
        this.resourcesType = types
        this.selectedType = types[0]
        this.getResourcesList()
      }

    }).catch((err: any) => {
      this.showLodaer = false
      console.log('This is error from RES Tag Promise-->', err);
    });

  }

  selectType(type: any) {
    this.selectedType = type
    this.getResourcesList()

  }

  getResourcesList() {
    this.showLodaer = true
    this.resourcesList = []
    this.resourcesService.getResourcesList(this.selectedType.id).then((list: any) => {
      this.showLodaer = false
      console.log('Resources List API res-->', list)
      if (!this.commonSerice.isObjectEmpty(list)) {
        this.resourcesList = list
      }

    }).catch((err: any) => {
      this.showLodaer = false
      console.log('This is error from RES List Promise-->', err);
    });
  }

  downloadFile(name: any) {
    let url = environment.baseApiUrl + API_ENDPOINTS.RESOURCES.FILE_DOWNLOAD_URL + name
    this.commonSerice.getFile(url, name)
  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }

}
