import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ListService } from './list.service';
import { ModalData } from './modal/modal.data';
import { LoginService } from './Services/HttpRequest/HttpUtilityService/login.service';
import { ModalDataService } from './Services/modal.data.service';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader:boolean=true;
  title = 'app';

  modal : ModalData;
  showModal: boolean;
  isLogged : boolean = false;

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

