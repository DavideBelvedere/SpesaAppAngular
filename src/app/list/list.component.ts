import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
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

  list: string;
  constructor( private modalService: ModalDataService) { }

  ngOnInit() {
  }


  openModalDelete() {
    this.modalService.showModal(new ModalData("elimina lista","vuoi eliminare la lista " + this.list + " ?", new Buttons("Annulla",()=>{this.modalService.hideModal()}), new Buttons("Conferma", () => { console.log("confirm!") }), null, null));
  }
  


  
}
