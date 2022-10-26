import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NailsComponent } from './nails.component';

const routes: Routes = [
  {
    path: '',
    component: NailsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NailsComponent]
})
export class NailsModule { }
