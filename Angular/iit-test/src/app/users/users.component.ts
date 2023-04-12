import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import {UserService} from '../user.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private userService: UserService, private domSanitizer: DomSanitizer){}

  users: User[] = [];

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  getUsers(): User[]{
    return this.users;
  }

  // sanitizeImageUrl(url: string) {
  //   console.log("Sanitization is on...")
  //   return this.domSanitizer.bypassSecurityTrustUrl(url);
  // }
}
