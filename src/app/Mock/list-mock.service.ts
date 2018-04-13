import { Injectable } from '@angular/core';
import { ListItem } from '../Model/ListItem';
import { Item } from '../Model/item';



@Injectable()
export class ListMockService {

  constructor() { }

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    mockedList: { mock: ListMock, url: 'updateList' }
  }
}

export const ListItem1: Item[] = [
  new Item(1, "../../assets/img/carne.jpeg", "pera", "", 2, false),
  new Item(2, "../../assets/img/carne.jpeg", "mela", "", 5, true),
  new Item(3, "../../assets/img/carne.jpeg", "pane", "", 6, false),
  new Item(4, "../../assets/img/carne.jpeg", "acqua", "", 6, false)
]

export const ListItem2: Item[] = [
  new Item(5, "../../assets/img/carne.jpeg", "farina", "200grammi", 0, false),
  new Item(6, "../../assets/img/carne.jpeg", "zucchero", "500grammi", 3, true),
  new Item(7, "../../assets/img/carne.jpeg", "biscotti", "200grammi", 6, false),
  new Item(4, "../../assets/img/carne.jpeg", "acqua", "", 6, false)
]

export const ListItem3: Item[] = [
  new Item(8, "../../assets/img/carne.jpeg", "pesce", "2kg", 0, false),
  new Item(10, "../../assets/img/carne.jpeg", "manzo", "500grammi", 3, false),
  new Item(7, "../../assets/img/carne.jpeg", "biscotti", "200grammi", 6, false),
  new Item(4, "../../assets/img/carne.jpeg", "acqua", "", 1, true)
]
export const ListMock: ListItem[] =

  [
    new ListItem(1, "Lista Domenica", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem1, false, "descrizione1"),
    new ListItem(2, "Lista Feste", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem2, false, "descrizione2"),
    new ListItem(3, "Lista Spesucola", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem3, false, "descrizione3"),
  ]
