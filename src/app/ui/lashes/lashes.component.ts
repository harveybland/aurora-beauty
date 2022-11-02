import { Title } from '@angular/platform-browser';
import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lashes',
  templateUrl: './lashes.component.html',
  styleUrls: ['./lashes.component.scss']
})
export class LashesComponent implements OnInit {

  constructor(private titleService: Title,
    private _animation: AnimationService) {
    this.titleService.setTitle("Lashes & Brows - Aurora Beauty");
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }

}
