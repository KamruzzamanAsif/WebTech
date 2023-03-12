import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  // dependency injection > must be in constructor
  constructor(private itemService: ItemService){}

  myItems: Item[] = [];

  // initialization of items
  // everything must be initialize here
  ngOnInit(): void{
    this.myItems = this.itemService.getItems();
    console.log(this.myItems);
  }

}