import { AnimationService } from './../../shared/animation.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private titleService: Title,
    private _animation: AnimationService) {
    this.titleService.setTitle("Products - Aurora Beauty");
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._animation.animation();
  }


}
