import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ConfirmComponent } from './confirm/confirm.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel = {
    user: null,
    pass: null
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  check(element: any) {
    console.log(element);
    console.log(element.valid);
    console.log(element.errors);
    console.log(element.errors.required);
  }

  submit(confirm: any) {
    console.log(confirm);
    confirm.showLog();
    confirm.showLog2();
    this.authService.login(this.formModel).subscribe((data: any) => {
      console.log(data);
    });
  }
}
