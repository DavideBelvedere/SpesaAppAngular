import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ListService } from '../list.service';
import { ModalData } from './modal.data';
import { ModalDataService } from '../Services/modal.data.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../Model/User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  email: string;
  password: string;

  @Input()
  modalData: ModalData;

  modalDelete: Object;
  constructor(private listService: ListService, private modalDataService: ModalDataService, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  chargePhoto(){
    console.log("photooo");
  }

  close() {
    this.modalDataService.hideModal();
  }

}
