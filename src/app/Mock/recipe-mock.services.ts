import { Injectable } from '@angular/core';
import { ListItem } from '../Model/ListItem';
import { Item } from '../Model/item';



@Injectable()
export class RecipeMockService {

  constructor() { }

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    mockedRecipe: { mock: RecipeMock, url: 'updateRecipe' }
  }
}

export const ListItem1: Item[] = [
  new Item(6, "../../assets/img/carne.jpeg", "zucchero", "500gr", null, false),
  new Item(2, "../../assets/img/carne.jpeg", "mela", "", 5, true),
  new Item(5, "../../assets/img/carne.jpeg", "farina", "500gr", null, false),
  new Item(4, "../../assets/img/carne.jpeg", "uova", "", 4, false),
  new Item(18, "../../assets/img/carne.jpeg","mandorle","150gr",null, false)
]

export const ListItem2: Item[] = [
  new Item(5, "../../assets/img/carne.jpeg", "farina", "200grammi", 0, false),
  new Item(6, "../../assets/img/carne.jpeg", "zucchero", "500grammi", 3, true),
  new Item(7, "../../assets/img/carne.jpeg", "Limone", "200grammi", 5, false),
  new Item(4, "../../assets/img/carne.jpeg", "uova", "4", 5, false),

]

export const ListItem3: Item[] = [
  new Item(8, "../../assets/img/carne.jpeg", "pesce", "2kg", 0, false),
  new Item(10, "../../assets/img/carne.jpeg", "manzo", "500grammi", 3, false),
  new Item(7, "../../assets/img/carne.jpeg", "biscotti", "200grammi", 6, false),
  new Item(4, "../../assets/img/carne.jpeg", "acqua", "", 1, true)
]
export const RecipeMock: ListItem[] =

  [
    new ListItem(4, "Biscotti Mandorle", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem1, false, "descrizione1"),
    new ListItem(5, "Torta al Limone", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem2, false, "descrizione2"),
    new ListItem(6, "Lista Spesucola", JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", ListItem3, false, "descrizione3")
  ]
