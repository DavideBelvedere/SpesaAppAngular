import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ListService } from './list.service';
import { ModalData } from './modal/modal.data';
import { LoginService } from './Services/HttpRequest/HttpUtilityService/login.service';
import { ModalDataService } from './Services/modal.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean = false;
  title = 'app';

  modal : ModalData;
  showModal: boolean;
  

  constructor(private modalDataService : ModalDataService, private loginService: LoginService){ 
    this.modalDataService.modalData$.subscribe(modal => {
      this.modal = modal;
      this.showModal = modal != null && modal != undefined;

      this.loginService.logged$.subscribe((login: boolean) => {
        this.isLogged = login;
      })
    })
  }

}

