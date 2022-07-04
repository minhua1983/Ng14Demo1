import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: 'auth',
  component: AuthComponent,
  children:[{
    path: 'login',
    component: LoginComponent
  }]
}, {
  path: 'profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
