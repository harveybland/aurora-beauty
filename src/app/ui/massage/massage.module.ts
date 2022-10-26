import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassageComponent } from './massage.component';

const routes: Routes = [
  {
    path: '',
    component: MassageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MassageComponent]
})
export class MassageModule { }
