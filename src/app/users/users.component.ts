import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  url: string = 'http://localhost:3003/'
  users: User[] = new Array<User>()

  constructor( public usersServices: UsersService) { }

  ngOnInit(): void {
    this.usersServices.getUsers().subscribe(users =>console.log(users));
  }

}
