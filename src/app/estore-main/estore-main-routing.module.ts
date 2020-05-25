import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { AboutUsComponent } from './component/about-us/about-us.component';


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
    path: 'user-profile',
    component: UserProfileComponent,
    pathMatch:'full'
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    pathMatch:'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
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
