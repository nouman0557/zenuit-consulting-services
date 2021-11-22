import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // @ViewChild('scrollElement')
  // scrollElement!: ElementRef;

  isShow = false;
  topPosToStartShowing = 100;
  @HostListener('scroll')

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter

  }

  onActive() {
    window.scroll(0, 0)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.isShow = true;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  };

  gotoTop() {
    $('.scroll-top-icon').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0,
      }, 1500);
    });
  }
}
