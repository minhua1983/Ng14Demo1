import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(formModel: any) {
    return this.httpClient.post<any>("http://localhost:14000/api/auth/login", formModel);
  }
}
