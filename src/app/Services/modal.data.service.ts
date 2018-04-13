import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buttons } from '../Model/Buttons';
import { Subject } from 'rxjs/Subject';

import { LoginService } from './HttpRequest/HttpUtilityService/login.service';
import { User } from '../Model/User';
import { ModalData } from '../Model/modal.data';


@Injectable()
export class ModalDataService {

  constructor(private loginService: LoginService){}

  private modalData: Subject<ModalData> = new Subject<ModalData>();

  public modalData$ = this.modalData.asObservable();

  public showModal(modalData: ModalData){
    this.modalData.next(modalData);
  }

  public hideModal(){
    this.modalData.next(null);
  }

  email : string;
}