import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private httpClient:HttpClient) { }

  Login(LoginForm:any):Observable<any> {
    return this.httpClient.post('http://localhost:8084/api/v1/auth/login', LoginForm);
  }

  Register(registerForm:any):Observable<any> {
    return this.httpClient.post('http://localhost:8084/api/v1/auth/register', registerForm);
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
