import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourcesHttpService } from 'src/app/core/http/resources-http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public routeName = ''
  public navBgImg = true
  constructor(private httpClint: HttpClient,) { }

  public isObjectEmpty(object: any) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) return false;
    }
    return true;
  }

  getFile(url: any, name: any) {
    this.downloadFile(url).subscribe((data: any) => {
      var binaryData = [];
      binaryData.push(data);
      var downloadURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }))
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = name;
      link.click();
    });
  }

  downloadFile(url: any) {
    return this.httpClint.get(url, { responseType: 'arraybuffer', })

  }

}
