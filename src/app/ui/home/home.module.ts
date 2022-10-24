import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxGlideModule } from 'ngx-glide';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxGlideModule,
    MatDialogModule,
    MatTabsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
