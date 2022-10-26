import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LashesComponent } from './lashes.component';

const routes: Routes = [
  {
    path: '',
    component: LashesComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LashesComponent]
})
export class LashesModule { }
