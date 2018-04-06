import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ListService } from './list.service';
import { ModalDataService } from './modal/modal.data.service';
import { ModalData } from './modal/modal.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modal : ModalData;
  showModal: boolean;
  

  constructor(private modalDataService : ModalDataService){ 
    this.modalDataService.modalData$.subscribe(modal => {
      this.modal = modal;
      this.showModal = modal != null && modal != undefined;
    })
  }



  

}
