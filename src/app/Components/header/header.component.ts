import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../Model/headerItem';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';

import { ModalData } from '../../modal/modal.data';
import { Buttons } from '../../Model/Buttons';
import { ModalDataService } from '../../Services/modal.data.service';
import { Textbox } from '../../Model/Textbox';
import { User } from '../../Model/User';
import { element } from 'protractor';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isLogged: boolean = false;

  private menuListUnlogged: MenuItem[] = [
    new MenuItem(RoutingEnum.Scarica, "Scarica"),
    new MenuItem(RoutingEnum.Fuzionalita, "Funzionalità"),
    new MenuItem(RoutingEnum.Contatti, "Contatti"),
    new MenuItem(RoutingEnum.Registrati, "Registrati"),

  ];

  private menuListLogged: MenuItem[] = [
    new MenuItem(RoutingEnum.List, "Elenco Liste"),
    new MenuItem(RoutingEnum.Recipe, "Ricette"),
  ];

  textboxs : Textbox[] = [
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("" , "Password", true, "password","password")
  ];
  openModalLogin(){
    this.modalService.showModal(new ModalData("Login" , null,  new Buttons("Conferma", ()=>{this.login()}), new Buttons("annulla", ()=>{this.modalService.hideModal()}), true, this.textboxs));
    for(let i = 0; i < this.textboxs.length; i++){
      this.textboxs[i].key = null;
    }
  }

  constructor(private loginService: LoginService, private modalService : ModalDataService) { 
    this.loginService.logged$.subscribe((login: boolean) => {
      this.isLogged = login;
    });

  }

  ngOnInit() {
  }
login(){
  let user: User = new User(this.textboxs[0].getValue(), this.textboxs[1].getValue());
  this.loginService.executeLogin(user,
    (response) => {
      console.log("success");
      sessionStorage.setItem("user", JSON.stringify(response));
      this.loginService.nextLogged(true);
      //this.router.navigate(["/" + RoutingEnum.Home]);
    }, (error) => {
      console.log("error");
    });
    this.modalService.hideModal()
}

}
