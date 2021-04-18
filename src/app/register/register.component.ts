import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  is_admin: boolean;
  user_image: string; 
  rol: string;
  password: string;
  confirmPassword: string;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  register() {
    this.user_image = (<HTMLInputElement>document.getElementById("user_image")).files[0].name;
    const user = {username: this.username, is_admin: this.is_admin, rol: this.rol, user_image: this.user_image, password: this.password};
    this.userService.register(user).subscribe( data => {
      console.log(data);
    });
    console.log(user);

  }


}
