import { AnimationService } from './../../shared/animation.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _router: Router,
    private _animation: AnimationService,
    public dialog: MatDialog,
    private titleService: Title) {
    this.titleService.setTitle("Aurora Beauty");
  }


  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }

  // @HostListener("document:scroll")
  // scrollfunction() {
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1600) {
  //     this.openDialog();
  //     this.scrollfunction = function () { }
  //   }
  // }

}

