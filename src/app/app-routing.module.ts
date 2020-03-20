import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'add-product', component: ProductAddComponent},
  { path: '**', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
