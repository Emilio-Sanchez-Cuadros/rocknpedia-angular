import { Component, OnInit } from '@angular/core';
import { UserLogged } from '../models/login';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url: string = 'http://localhost:3003/'
  userLogged: UserLogged;
  isLogged: boolean = false;

  token: string = sessionStorage.getItem("token");
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    if(this.token) {
      this.userLogged = decode(this.token) as UserLogged;
      this.isLogged = true;
    }
  }

  logout(){
    sessionStorage.removeItem("token");
    this.isLogged = false;
    this.router.navigate(['/'])
  }

}

