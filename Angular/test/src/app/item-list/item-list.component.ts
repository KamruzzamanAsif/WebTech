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

  requestItem(item_name: String): void{
    alert("item: " + item_name + " requested");
  }

  buyItem(item_index: number): void{
    let quantity, name: any = 0;
    quantity = this.myItems[item_index].quantity - 1;
    name = this.myItems[item_index].name;
    alert("one item of "+ name + " is bought" + "\nnow available "+quantity);
    this.itemService.setItems(item_index);
  }
}
