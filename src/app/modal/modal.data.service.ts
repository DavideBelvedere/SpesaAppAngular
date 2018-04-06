import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalData } from './modal.data';
import { Buttons } from '../Model/Buttons';
import { Subject } from 'rxjs/Subject';
import { ModalComponent } from './modal.component';


@Injectable()
export class ModalDataService {

  private modalData: Subject<ModalData> = new Subject<ModalData>();

  public modalData$ = this.modalData.asObservable();

  public showModal(modalData: ModalData){
    this.modalData.next(modalData);
  }

  public hideModal(){
    this.modalData.next(null);
  }

  email : string;
  takeLogin(email: string, password: string){
    this.email = email;
   
  }

doLogin(){
  sessionStorage.setItem("email" , this.email);
}

}