import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ListService } from '../list.service';
import { ModalDataService } from './modal.data.service';
import { ModalData } from './modal.data';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  modalData: ModalData;

  modalDelete: Object;
  constructor(private listService: ListService, private modalDataService: ModalDataService) {

    
  }

  ngOnInit() {
  }

  confirm() {

  }

email : string;
password: string;

  back() {
    this.listService.setModal(false);
  }

  login(email : string, password: string){
    this.modalDataService.takeLogin(email, password);
  }


}
