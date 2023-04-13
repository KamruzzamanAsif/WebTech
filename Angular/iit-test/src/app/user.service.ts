import { Injectable } from '@angular/core';
import {User} from './User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [
    { id: 12, name: 'Dr. Nice', imageLink: '' },
    { id: 13, name: 'Bombasto', imageLink: '' },
    { id: 14, name: 'Celeritas', imageLink: '' },
    { id: 15, name: 'Magneta' , imageLink: ''},
    { id: 16, name: 'RubberMan' , imageLink: ''},
    { id: 17, name: 'Dynama', imageLink: '' },
    { id: 18, name: 'Dr. IQ' , imageLink: ''},
    { id: 19, name: 'Magma', imageLink: '' },
    { id: 20, name: 'Tornado' , imageLink: ''}
  ];

  userToBeUpdated: User = new User();

  getUsers(): User[]{
    return this.users;
  }

  addUser(user: User): void{
    this.users.push(user);
  }

  deleteUser(index: number): void{
    this.users.splice(index, 1);
  }
  
  setUserToBeUpdated(index: number): void{
    this.userToBeUpdated = this.users[index];
  }
  getUserToBeUpdated(): User{
    return this.userToBeUpdated;
  }
}
