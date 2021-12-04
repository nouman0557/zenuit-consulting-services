import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/data-services/blog.service';
import { CommonService } from '../core/data-services/commom.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    public commonSerice: CommonService,
    private blogService: BlogService
  ) { }

  blogType: any
  blogList: any
  selectedType: any
  tempImage = '../../assets/images/no-image-available.jpg'

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0, }, 100);
    $('nav').removeClass('bg-faded');
    this.commonSerice.routeName = 'Zenuit Blog'
    this.commonSerice.navBgImg = false
    this.getBlogType()
  }

  showLodaer = false
  getBlogType() {
    this.showLodaer = true
    this.blogService.getBlogType().then((types: any) => {
      this.showLodaer = false
      console.log('blog Tags API res-->', types)
      if (!this.commonSerice.isObjectEmpty(types)) {
        this.blogType = types
        this.selectedType = types[0]
        this.getBlogList()
      }
    }).catch((err: any) => {
      this.showLodaer = false
      console.log('This is error from RES Tag Promise-->', err);
    });

  }

  selectType(type: any) {
    this.selectedType = type
    this.getBlogList()
  }

  getBlogList() {
    this.showLodaer = true
    this.blogList = []
    this.blogService.getBlogList(this.selectedType.id).then((list: any) => {
      this.showLodaer = false
      console.log('blog List API res-->', list)
      if (!this.commonSerice.isObjectEmpty(list)) {
        this.blogList = list
      }
    }).catch((err: any) => {
      this.showLodaer = false
      console.log('This is error from res List Promise-->', err);
    });

  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }

}
