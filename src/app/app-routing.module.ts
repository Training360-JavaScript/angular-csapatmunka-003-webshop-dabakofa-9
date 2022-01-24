import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {CategoryComponent} from "./page/category/category.component";

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
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
