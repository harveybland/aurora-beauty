import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaxingComponent } from './waxing.component';

const routes: Routes = [
  {
    path: '',
    component: WaxingComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WaxingComponent]
})
export class WaxingModule { }
