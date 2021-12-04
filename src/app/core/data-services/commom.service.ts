import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  public routeName = ''
  public navBgImg = true
  constructor() { }

  public isObjectEmpty(object: any) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) return false;
    }
    return true;
  }
}