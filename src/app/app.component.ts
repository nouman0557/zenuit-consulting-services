import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

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

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.isShow = true;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  };

  gotoTop() {
    // this.scrollElement.nativeElement.scrollTop = 0;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
