import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'business-login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    // loadChildren: () => import('../main/main.module').then(m => m.MainModule),
    loadChildren : '../main/main.module#MainModule',
    data: { preload: true }
  },
  {
    path: 'business-login',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
