import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoreAuthRoutingModule { }
