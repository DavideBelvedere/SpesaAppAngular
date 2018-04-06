import { Injectable } from '@angular/core';
import { Item } from './list/item';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ListService {

  constructor() { }

  lists : Item[] = [

    new Item("pomodori" , "rosso come la merda"),
    new Item("carciofi" , "rosso come la merda"),
    new Item("ananas" , "rosso come la merda"),
    new Item("collega" , "rosso come la merda")
  ]

  getList(){
    return this.lists;
  }


  private modal : Subject<boolean> = new Subject<boolean>();

  public modal$ = this.modal.asObservable();

  setModal(value: boolean){
    this.modal.next(value);
  }
}
