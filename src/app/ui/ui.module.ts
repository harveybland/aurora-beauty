import { CoreModule } from './../shared/modules/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((o) => o.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((o) => o.AboutModule),
      },
      // {
      //   path: 'treatments',
      //   loadChildren: () => import('./treatments/treatments.module').then(o => o.TreatmentsModule),
      // },
      {
        path: 'skincare',
        loadChildren: () =>
          import('./skincare/skincare.module').then((o) => o.SkincareModule),
      },
      {
        path: 'skincare/decleor',
        loadChildren: () =>
          import('./decleor/decleor.module').then((o) => o.MillionModule),
      },
      {
        path: 'skincare/skinbase',
        loadChildren: () =>
          import('./skinbase/skinbase.module').then((o) => o.SkinbaseModule),
      },
      {
        path: 'hands',
        loadChildren: () =>
          import('./nails/nails.module').then((o) => o.NailsModule),
      },
      {
        path: 'lashes',
        loadChildren: () =>
          import('./lashes/lashes.module').then((o) => o.LashesModule),
      },
      {
        path: 'waxing',
        loadChildren: () =>
          import('./waxing/waxing.module').then((o) => o.WaxingModule),
      },
      {
        path: 'massage',
        loadChildren: () =>
          import('./massage/massage.module').then((o) => o.MassageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((o) => o.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((o) => o.ContactModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [UiComponent],
})
export class UiModule {}
