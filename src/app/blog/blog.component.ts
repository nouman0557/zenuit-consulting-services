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

  tempTypes = [
    { id: 1, description: 'All' },
    { id: 2, description: 'IT Services/VAR Business' },
    { id: 3, description: 'Cyber Security' },
    { id: 4, description: 'Data Protection' },
    { id: 5, description: 'Emerging Technoligies' }
  ]

  tempBlogData = [
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' },
    { blogImage: null, created_at: new Date(), title: 'Lorem ipsum dolor sit amet, consectetur', description: 'Cyber attacks are so commonplace that they have become a part of the business world. The result is detrimental', userName: 'Mariana Pereira', userDesignation: 'Director of Email Security Products' }
  ]

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
      this.blogType = this.tempTypes
      this.blogList = this.tempBlogData
      this.selectedType = this.tempTypes[0]
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
    this.blogService.getBlogList(this.selectedType.id).then((list: any) => {
      this.showLodaer = false
      console.log('blog List API res-->', list)
      if (!this.commonSerice.isObjectEmpty(list)) {
        this.blogList = list
      }
    }).catch((err: any) => {
      this.blogList = this.tempBlogData
      this.showLodaer = false
      console.log('This is error from res List Promise-->', err);
    });

  }

  ngOnDestroy(): void {
    this.commonSerice.navBgImg = true
  }

}
