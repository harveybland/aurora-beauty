import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './animations/animations';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.scss'],
  animations: [routerAnimation()],
})
export class SkincareComponent {
  constructor() {}

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }
}
