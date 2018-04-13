import { Injectable } from '@angular/core';
import { ListItem } from '../Model/ListItem';
import { Item } from '../Model/item';



@Injectable()
export class ListMockService {

  constructor(){}

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
  new Item(1, "../../assets/img/image-profile.png", "pera", "", 2, false),
  new Item(2, "../../assets/img/image-profile.png", "mela", "", 5, true),
  new Item(3, "../../assets/img/image-profile.png", "pane", "", 6, false),
  new Item(4, "../../assets/img/image-profile.png", "acqua", "", 6, false)
]

export const ListItem2: Item[] = [
  new Item(5, "../../assets/img/image-profile.png", "farina", "200grammi", 0, false),
  new Item(6, "../../assets/img/image-profile.png", "zucchero", "500grammi", 3, true),
  new Item(7, "../../assets/img/image-profile.png", "biscotti", "200grammi", 6, false),
  new Item(4, "../../assets/img/image-profile.png", "acqua", "", 6, false)
]

export const ListItem3: Item[] = [
  new Item(8, "../../assets/img/image-profile.png", "pesce", "2kg", 0, false),
  new Item(10, "../../assets/img/image-profile.png", "manzo", "500grammi", 3, false),
  new Item(7, "../../assets/img/image-profile.png", "biscotti", "200grammi", 6, false),
  new Item(4, "../../assets/img/image-profile.png", "acqua", "", 1, true)
]
export const ListMock: ListItem[] =

  [
    new ListItem(1, "Lista Domenica", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/image-profile.png", ListItem1),
    new ListItem(2, "Lista Feste", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/image-profile.png", ListItem2),
    new ListItem(3, "Lista Spesucola", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/image-profile.png", ListItem3),
  ]
