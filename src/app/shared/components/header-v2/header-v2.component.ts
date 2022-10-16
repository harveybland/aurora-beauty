import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-v2',
  templateUrl: './header-v2.component.html',
  styleUrls: ['./header-v2.component.scss']
})
export class HeaderV2Component implements OnInit {

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 50) {
      document.querySelector('.nav')!.classList.add('nav-color');
      document.querySelectorAll('.nav-links li').forEach(el => el!.classList.add('nav-link-color'));
      // document.querySelector('.contact-button')!.classList.add('contact-button-color');
    } else {
      document.querySelector('.nav')!.classList.remove('nav-color');
      document.querySelectorAll('.nav-links li').forEach(el => el!.classList.remove('nav-link-color'))
      // document.querySelector('.contact-button')!.classList.remove('contact-button-color');
    }
  }

  burger() {
    this.active = !this.active
  }

  setNav() {
    this.active = false;
  }

}
