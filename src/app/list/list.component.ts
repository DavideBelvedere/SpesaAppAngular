import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ListService } from '../list.service';
import { ModalData } from '../modal/modal.data';
import { Buttons } from '../Model/Buttons';
import { ModalDataService } from '../Services/modal.data.service';
import { Textbox } from '../Model/Textbox';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private modalService: ModalDataService) { }

  ngOnInit() {
  }

  lists = this.listService.getList();

  openModalDelete() {
    this.modalService.showModal(new ModalData("elimina lista","vuoi eliminare la lista?", new Buttons("Annulla",()=>{this.modalService.hideModal()}), new Buttons("Conferma", () => { console.log("confirm!") }), null, null));
  }

getRio(){}
  


  
}
