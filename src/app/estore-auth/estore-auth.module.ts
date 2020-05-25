import { NgModule } from '@angular/core';
import { EstoreAuthRoutingModule } from './estore-auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';



@NgModule({
  declarations: [
  LoginComponent,
  SignupComponent,
  ForgetPasswordComponent,
  ResetPasswordComponent],
  imports: [
    EstoreAuthRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class EstoreAuthModule { }
