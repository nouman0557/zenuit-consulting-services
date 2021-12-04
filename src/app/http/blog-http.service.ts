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


  getBlogTags() {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.BLOG.BLOG_TAGS_URL)
  }

  getBlogsList(tagId: any) {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.BLOG.BLOG_LIST_URL + '/' + tagId)
  }

}
