import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API_ENDPOINTS } from './api-end-points';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  constructor(
    private httpClint: HttpClient,

  ) { }


  getBlogtype() {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.BLOG.BLOG_TYPE_URL)
  }

  getBlogsList(blogId: any) {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.BLOG.BLOG_LIST_URL_1 + blogId + API_ENDPOINTS.BLOG.BLOG_LIST_URL_2)
  }

}
