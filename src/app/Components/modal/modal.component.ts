import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ModalData } from '../../Model/modal.data';
import { ModalDataService } from '../../Services/modal.data.service';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';


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
  constructor( private modalDataService: ModalDataService, private loginService: LoginService) {
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
