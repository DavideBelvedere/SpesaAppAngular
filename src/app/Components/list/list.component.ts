import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDataService } from '../../Services/modal.data.service';
import { ModalData } from '../../Model/modal.data';
import { Textbox } from '../../Model/Textbox';
import { Buttons } from '../../Model/Buttons';
import { ListItem } from '../../Model/ListItem';
import { createElement } from '@angular/core/src/view/element';




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
  }


  openModalDelete() {
    this.modalService.showModal(new ModalData("elimina lista", "vuoi eliminare la lista " + this.list + " ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log("confirm!") }), null, null));
  }
  textboxs: Textbox[] = [
    new Textbox("nome della lista", null, true, "addList", "text"),
    new Textbox("descrizione", null, true, "descrizione", "text")
  ];

  openModalAddList() {
    this.modalService.showModal(new ModalData("Aggiungi lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { }), true, this.textboxs))
  }

  lists: ListItem[];

  getStyle(value : boolean){
   this.show = value;
   console.log(value)
  }
}