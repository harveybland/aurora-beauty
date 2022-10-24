import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MillionComponent } from './million.component';

const routes: Routes = [
  {
    path: '',
    component: MillionComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MillionComponent]
})
export class MillionModule { }
