import { Title } from '@angular/platform-browser';
import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements OnInit {

  constructor(private titleService: Title,
    private _animation: AnimationService) {
    this.titleService.setTitle("Advanced Massage - Aurora Beauty");
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }

}
