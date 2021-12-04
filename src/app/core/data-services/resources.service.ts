import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesHttpService } from 'src/app/http/resources-http.service';
import { CommomService } from './commom.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  requestData = {
    req: ''
  }
  constructor(
    public _commonService: CommomService,
    public _router: Router,
    private resourcesHttp: ResourcesHttpService,
  ) { }

  resourcesTags: any
  getResourcesTags() {
    return new Promise((resolve, reject) => {
      this.resourcesHttp.getResourcesTags().subscribe(
        response => {
          console.log('Resources Tags API res-->', response)
          resolve(response)
        },
        err => {
          reject(err)
          console.log("Resources Api Response Error", err)
        })
    })
  }

}
