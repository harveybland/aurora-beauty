import { Title } from '@angular/platform-browser';
import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.scss'],
})
export class NailsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private _animation: AnimationService
  ) {
    this.titleService.setTitle('Hands & Feet - Aurora Beauty');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }
}
