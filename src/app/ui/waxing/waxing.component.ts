import { Title } from '@angular/platform-browser';
import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waxing',
  templateUrl: './waxing.component.html',
  styleUrls: ['./waxing.component.scss']
})
export class WaxingComponent implements OnInit {

  constructor(private titleService: Title,
    private _animation: AnimationService) {
    this.titleService.setTitle("Waxing - Aurora Beauty");
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }

}
