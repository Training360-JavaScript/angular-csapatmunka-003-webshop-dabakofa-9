import { ProductCardPreviewComponent } from './common/product-card-preview/product-card-preview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {CategoryComponent} from "./page/category/category.component";
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "kategoria/:categoryId",
    component: CategoryComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'preview/:id',
    component: ProductCardPreviewComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
