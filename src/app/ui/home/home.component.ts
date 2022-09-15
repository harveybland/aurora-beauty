import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  observer: any;

  constructor(public _router: Router,
    public dialog: MatDialog) { }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.animation();
  }

  animation() {
    const targets = document.querySelectorAll('.animation');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach((target) => {
      observer.observe(target);
    });

    function callback(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          addActiveClass(entry.target);
        } else if (!entry.isIntersecting) {
          removeActiveClass(entry.target);
        }
      });
    }

    function addActiveClass(element: any) {
      element.classList.add('on');
    }

    function removeActiveClass(element: any) {
      element.classList.remove('on');
    }
  }

  triggerModal() {
    const options = {
      threshold: [0, 1],
      rootMargin: '0px',
    };

    this.observer = new IntersectionObserver(function (this: any, entries) {
      if (entries[0].isIntersecting == false) {
        console.log(1)
      } else {
        console.log(2)
      }
    }, options);

    const element1 = document.querySelector('.trigger');
    this.observer.observe(element1);
  }

  openDialog() {
    const dialog = this.dialog.open(ModalComponent, {
      maxWidth: '768px',
      data: {}
    });
  }

}

