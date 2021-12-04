import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BlogHttpService } from '../../http/blog-http.service';
import { CommomService } from './commom.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // skeletonValue = new BehaviorSubject(false);
  requestData = {
    req: ''
  }
  constructor(
    public _commonService: CommomService,
    public _router: Router,
    private blogHttp: BlogHttpService,
  ) { }

  blogTags: any
  getBlogTags() {
    return new Promise((resolve, reject) => {
      this.blogHttp.getBlogTags().subscribe(
        response => {
          console.log('Blog Tags API res-->', response)
          resolve(response)
        },
        err => {
          reject(err)
          console.log(" Api Response Error", err)
        })
    })
  }


  dataMapping() {
    this.blogTags = this.blogTags.map((el: { test: any; }) => {
      let testObj: any = {
        test: el.test,

      }
      return testObj
    });
  }


}
