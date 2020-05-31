import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { EstoreMainRoutingModule } from './estore-main-routing.module';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductListService } from './component/product-list/product-list.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
  MainPageComponent,
  CartComponent,
  CheckoutComponent,
  ProductListComponent,
  ContactComponent,
  ProductDetailsComponent,
  UserProfileComponent,
  MyOrdersComponent,
  AboutUsComponent
],
  imports: [
    EstoreMainRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductListService],
})
export class EstoreMainModule { }
