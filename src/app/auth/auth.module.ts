import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './login/confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, ConfirmComponent],
  exports: [ConfirmComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AuthModule { }
