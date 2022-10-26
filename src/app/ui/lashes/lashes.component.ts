import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lashes',
  templateUrl: './lashes.component.html',
  styleUrls: ['./lashes.component.scss']
})
export class LashesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
