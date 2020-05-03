import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './estore-auth/estore-auth.module#EstoreAuthModule'
  },
  {
    path: 'main',
    loadChildren: './estore-main/estore-main.module#EstoreMainModule',

  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
