import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import {UserService} from '../user.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private userService: UserService){}

  users: User[] = [];

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  getUsers(): User[]{
    return this.users;
  }
}
