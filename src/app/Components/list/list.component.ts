import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDataService } from '../../Services/modal.data.service';
import { ModalData } from '../../Model/modal.data';
import { Textbox } from '../../Model/Textbox';
import { Buttons } from '../../Model/Buttons';
import { ListItem } from '../../Model/ListItem';
import { createElement } from '@angular/core/src/view/element';
import { User } from '../../Model/User';
import { Item } from '../../Model/item';
import { Router } from '@angular/router';




@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   show : boolean = false; 
    list: string;
  constructor(private modalService: ModalDataService) { }

  ngOnInit() {
    for(let item of this.lists){
      this.showInfo(item.id,false);
    }

  }
  

  openModalDelete(name: string) {
    this.modalService.showModal(new ModalData("elimina lista", "vuoi eliminare la lista <strong>" + name + "</strong> ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log("confirm!") }), null, null));
  }
  textboxAdd: Textbox[] = [
    new Textbox("nome della lista", "nome lista:", true, "nome lista", "text"),
    new Textbox("descrizione", "descrizione:", true, "descrizione", "text")
  ];

  openModalAddList() {
    this.modalService.showModal(new ModalData("Aggiungi lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(this.textboxAdd[0].getValue(), this.textboxAdd[1].getValue()) }), true, this.textboxAdd))
  }

  

openModalEditList(id: number, listName: string, listDesc : string ){

  let textboxEdit: Textbox[] = [
    new Textbox( listName , "nome lista:", true, listName, "text"),
    new Textbox(listDesc, "descrizione:", true, listDesc, "text")
  ]
  this.modalService.showModal(new ModalData("Modifica lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(textboxEdit[0].getValue(), textboxEdit[1].getValue()) }), true, textboxEdit))
}

  user : User = new User("matteo","bell","eff","def");


  listaone : Item[] = [
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false)
 ]

  lists: ListItem[] = [
    new ListItem(0,"lista spesa", this.user,"frr",this.listaone),
    new ListItem(1,"lista capanna", this.user,"frfr", this.listaone)
  ];

  showInfo(id :number, value : boolean){
    let item = this.getListbyId(id);
    item.showInfo(value);
  }

  getListbyId(id: number){
    for(let item of this.lists){
      if(item.id == id){
        return item;
      }
    }
  }

  
selectList(item : ListItem){
 
}
 

}