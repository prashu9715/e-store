import { NgModule } from '@angular/core';
import { AuthComponent } from './component/auth/auth.component';
import { EstoreAuthRoutingModule } from './estore-auth-routing.module';



@NgModule({
  declarations: [
  AuthComponent],
  imports: [
    EstoreAuthRoutingModule
  ],
  providers: [],
})
export class EstoreAuthModule { }
