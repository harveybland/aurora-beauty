import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkincareComponent } from './skincare.component';

const routes: Routes = [
  {
    path: '',
    component: SkincareComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SkincareComponent]
})
export class SkincareModule { }
