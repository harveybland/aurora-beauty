import { NgxGlideModule } from 'ngx-glide';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentsComponent } from './treatments.component';

const routes: Routes = [
  {
    path: '',
    component: TreatmentsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TreatmentsComponent]
})
export class TreatmentsModule { }
