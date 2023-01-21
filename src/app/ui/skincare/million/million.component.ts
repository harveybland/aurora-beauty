import { AnimationService } from './../../../shared/animation.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-million',
  templateUrl: './million.component.html',
  styleUrls: ['./million.component.scss'],
})
export class MillionComponent implements OnInit {
  constructor(
    private titleService: Title,
    private _animation: AnimationService
  ) {
    this.titleService.setTitle('Skincare - Aurora Beauty');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }
}
