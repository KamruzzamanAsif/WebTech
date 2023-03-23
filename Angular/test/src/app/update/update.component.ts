import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private itemService: ItemService, private router: Router){}
  myItemToBeUpdated: Item = new Item();

  ngOnInit(): void{
    this.myItemToBeUpdated = this.itemService.getItemToBeUpdated();
    console.log(this.itemService.getItemToBeUpdated().name);
  }

  updateItem() :void{
    this.router.navigate(["items"]);
  }
}
