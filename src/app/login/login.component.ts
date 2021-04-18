import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users';
import { UserLogged } from '../models/login';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(public userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe(data => {
      sessionStorage.setItem("token", Object.values(data).toString());
      console.log(Object.values(data).toString());
      const token = sessionStorage.getItem("token");
      const { user_id, username, is_admin, user_image, rol } = decode(token) as UserLogged;
      console.log({user_id, username, is_admin, user_image, rol});    
      this.router.navigate(['/'])
    });
  }

}
