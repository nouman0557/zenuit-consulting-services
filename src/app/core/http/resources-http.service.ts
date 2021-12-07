import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API_ENDPOINTS } from './api-end-points';

@Injectable({
  providedIn: 'root'
})
export class ResourcesHttpService {

  constructor(
    private httpClint: HttpClient,

  ) { }


  getResourcesTags() {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.RESOURCES.RESOURCES_TYPE_URL)
  }

  getResourcesList(tagId: any) {
    return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.RESOURCES.RESOURCES_LIST_URL_1 + tagId + API_ENDPOINTS.RESOURCES.RESOURCES_LIST_URL_2)
  }

  // test(requestData: any) {
  //   return this.httpClint.post(environment.baseApiUrl + API_ENDPOINTS.test.test, requestData)
  // }

  // downloadFile(name: any) {
  //   return this.httpClint.get(environment.baseApiUrl + API_ENDPOINTS.RESOURCES.FILE_DOWNLOAD_URL + name, {
  //     responseType: 'arraybuffer',
  //   })
  // }

}
