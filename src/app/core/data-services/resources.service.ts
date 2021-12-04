import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesHttpService } from 'src/app/http/resources-http.service';
import { CommonService } from './commom.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  requestData = {
    req: ''
  }

  constructor(
    public _commonService: CommonService,
    public _router: Router,
    private resourcesHttp: ResourcesHttpService,
  ) { }

  resourcesType: any

  getResourcesType() {
    return new Promise((resolve, reject) => {
      this.resourcesHttp.getResourcesTags().subscribe(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
          console.log("Resources Api Response Error", err)
        })
    })
  }

  getResourcesList(resourseId: any) {
    return new Promise((resolve, reject) => {
      this.resourcesHttp.getResourcesList(resourseId).subscribe(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
          console.log("Resources Api Response Error", err)
        })
    })
  }

}
