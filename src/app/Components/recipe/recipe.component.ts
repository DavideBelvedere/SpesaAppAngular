import { Component, OnInit } from '@angular/core';
import { ModalDataService } from '../../Services/modal.data.service';
import { ModalData } from '../../Model/modal.data';
import { Textbox } from '../../Model/Textbox';
import { Buttons } from '../../Model/Buttons';
import { Item } from '../../Model/item';
import { User } from '../../Model/User';
import { ListItem } from '../../Model/ListItem';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  show : boolean = false; 
  list: string;
constructor(private modalService: ModalDataService) { }

ngOnInit() {
  for(let item of this.lists){
    this.showInfo(item.id,false);
  }

}


openModalDelete(name: string) {
  this.modalService.showModal(new ModalData("Elimina Ricetta", "Vuoi eliminare la Ricetta <strong>" + name + "</strong> ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log("confirm!") }), null, null));
}
textboxAdd: Textbox[] = [
  new Textbox("Nome della Ricetta", "Nome Ricetta:", true, "Nome Ricetta", "text"),
  new Textbox("Descrizione", "Descrizione:", true, "Descrizione", "text")
];

openModalAddList() {
  this.modalService.showModal(new ModalData("Aggiungi lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(this.textboxAdd[0].getValue(), this.textboxAdd[1].getValue()) }), true, this.textboxAdd))
}



openModalEditList(id: number, listName: string, listDesc : string ){

let textboxEdit: Textbox[] = [
  new Textbox( listName , "Nome Ricetta:", true, listName, "text"),
  new Textbox(listDesc, "Descrizione:", true, listDesc, "text")
]
this.modalService.showModal(new ModalData("Modifica Ricetta", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(textboxEdit[0].getValue(), textboxEdit[1].getValue()) }), true, textboxEdit))
}

user : User = new User("matteo","bell","eff","def");


listaone : Item[] = [
  new Item(1,"def","olio","5kg",4,false),
  new Item(2,"def","olio","5kg",4,false),
  new Item(3,"def","olio","5kg",4,false),
  new Item(4,"def","olio","5kg",4,false)
]

lists: ListItem[] = [
  new ListItem(0,"Ricetta ZERO", this.user,"frr",this.listaone),
  new ListItem(1,"Ciambellone", this.user,"frfr", this.listaone),
  new ListItem(2,"Lasagna vegana", this.user,"frfr", this.listaone),
  new ListItem(3,"Pasta col tonno", this.user,"frfr", this.listaone)
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