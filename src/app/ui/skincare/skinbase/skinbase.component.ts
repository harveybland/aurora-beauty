import { Title } from '@angular/platform-browser';
import { AnimationService } from './../../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skinbase',
  templateUrl: './skinbase.component.html',
  styleUrls: ['./skinbase.component.scss'],
})
export class SkinbaseComponent implements OnInit {
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
