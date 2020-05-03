import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    pathMatch:'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    pathMatch:'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    pathMatch:'full'
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch:'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch:'full'
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoreMainRoutingModule { }
