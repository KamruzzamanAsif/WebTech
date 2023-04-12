import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import {UserService} from '../user.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  constructor(private userService: UserService, private router: Router){}
  
  user: User = new User();
  ngOnInit(){
    this.user = this.userService.getUserToBeUpdated();
  }

  update(): void{
    this.router.navigate(["users"]);
  }
}
