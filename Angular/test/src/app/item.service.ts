import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  // hard coded objects
  items: Item[] =[
    {id: 1, name: 'Iphone', price: 2000, quantity: 3},
    {id: 2, name: 'mackbook', price: 10000, quantity: 2},
    {id: 3, name: 'OPPO', price: 300, quantity: 0}
  ];

  // function to return item objects
  getItems(): Item[] {
    return this.items;
  }

  setItems(index: number){
    this.items[index].quantity = this.items[index].quantity - 1;
  }
}
