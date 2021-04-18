import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login, Register } from '../models/login';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  url: string = 'http://localhost:3003/users';  
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  login(user: Login) {
    return this.http.post(this.url + '/auth', user);
  }

  register(user: Register) {
    return this.http.post(this.url, user)
  }

}
