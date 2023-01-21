import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkincareComponent } from './skincare.component';
import { DecleorComponent } from './decleor/decleor.component';
import { MillionComponent } from './million/million.component';
import { SkinbaseComponent } from './skinbase/skinbase.component';

const routes: Routes = [
  {
    path: '',
    component: SkincareComponent,
  },
  {
    path: 'million',
    component: MillionComponent,
  },
  {
    path: 'decleor',
    component: DecleorComponent,
  },
  {
    path: 'skinbase',
    component: SkinbaseComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    SkincareComponent,
    MillionComponent,
    SkinbaseComponent,
    DecleorComponent,
  ],
})
export class SkincareModule {}
