import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoreAuthModule } from './estore-auth/estore-auth.module';
import { EstoreMainModule } from './estore-main/estore-main.module';
import { HeaderComponent } from './estore-main/component/common/header/header.component';
import { FooterComponent } from './estore-main/component/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
