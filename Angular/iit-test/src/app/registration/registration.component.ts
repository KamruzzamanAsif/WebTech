import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import {UserService} from '../user.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){}
  myUser: User = new User();
  
  userImage: any;

  nameNotCorrect?: boolean = true;
  idNotCorrect?: boolean = true;
  formNotValidate?: boolean = false;

  ngOnInit(){
    
  }

  onFileSelected(event: any) {
    this.userImage = <File>event.target.files[0];
    console.log("FILE: ", this.userImage);
  }

  addUser(): void{
    if(this.myUser.id != 0) this.idNotCorrect = false;
    if(this.myUser.name != null) this.nameNotCorrect = false;
    if(!this.idNotCorrect && !this.nameNotCorrect){
      this.myUser.imageLink = "/home/asif/Downloads/" + this.userImage.name;
      this.userService.addUser(this.myUser);
      this.router.navigate(["users"]);
      this.formNotValidate = false;
    }
    else{
      this.formNotValidate = true;
    }
  }
  
}
