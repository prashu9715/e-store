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



@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent,
  MainPageComponent,
  CartComponent,
  CheckoutComponent,
  ProductListComponent,
  ContactComponent,
  ProductDetailsComponent
],
  imports: [
    EstoreMainRoutingModule
  ],
  providers: [],
})
export class EstoreMainModule { }
