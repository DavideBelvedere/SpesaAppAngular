import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
list : string = "Spesa al Mercato";

confirm(){

}

back(){

}

confirm_modal: boolean = false;
login_modal : boolean = true;

}
