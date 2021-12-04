import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BlogHttpService } from '../../http/blog-http.service';
import { CommonService } from './commom.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  requestData = {
    req: ''
  }
  constructor(
    public _commonService: CommonService,
    public _router: Router,
    private blogHttp: BlogHttpService,
  ) { }

  getBlogType() {
    return new Promise((resolve, reject) => {
      this.blogHttp.getBlogtype().subscribe(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
          console.log("Blog Api Response Error", err)
        })
    })
  }

  getBlogList(blogId: any) {
    return new Promise((resolve, reject) => {
      this.blogHttp.getBlogsList(blogId).subscribe(
        response => {
          resolve(response)
        },
        err => {
          reject(err)
          console.log("Blog Api Response Error", err)
        })
    })
  }


}
