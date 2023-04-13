import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from '../User'
import {UserService} from '../user.service'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private userService: UserService, private router: Router){}

  users: User[] = [];

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  getUsers(): User[]{
    return this.users;
  }

  updateUser(index: number): void{
    this.userService.setUserToBeUpdated(index);
    this.router.navigate(["userUpdate"]);
  }

  deleteUser(index: number): void{
    this.userService.deleteUser(index);
  }

  // sanitizeImageUrl(url: string) {
  //   console.log("Sanitization is on...")
  //   return this.domSanitizer.bypassSecurityTrustUrl(url);
  // }
}
