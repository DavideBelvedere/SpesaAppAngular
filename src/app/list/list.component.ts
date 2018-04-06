import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ListService } from '../list.service';
import { ModalDataService } from '../modal/modal.data.service';
import { ModalData } from '../modal/modal.data';
import { Buttons } from '../Model/Buttons';

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
    this.modalService.showModal(new ModalData("Elimina Lista", "Vuoi Davvero Eliminare la lista ?", new Buttons("Annulla",()=>{this.modalService.hideModal()}), new Buttons("Conferma", () => { console.log("confirm!") })));
  }


  openModalLogin(){
    this.modalService.showModal(new ModalData("Login" , "",  new Buttons("Conferma", ()=>{this.modalService.doLogin()}), new Buttons("annulla", ()=>{this.modalService.hideModal()}), true))

  }


  
}
