import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../Model/headerItem';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../../Model/User';

import { ModalData } from '../../modal/modal.data';
import { Buttons } from '../../Model/Buttons';
import { ModalDataService } from '../../Services/modal.data.service';
import { Textbox } from '../../Model/Textbox';
import { element } from 'protractor';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  currentUser: User = null;
  isProfileClicked: boolean = false;
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

  textboxs: Textbox[] = [
    new Textbox("", "Email", true, "email", "text"),
    new Textbox("", "Password", true, "password", "password")
  ];
  openModalLogin() {
    this.modalService.showModal(new ModalData("Login", null, new Buttons("Conferma", () => { this.login() }), new Buttons("annulla", () => { this.modalService.hideModal() }), true, this.textboxs));
    for (let i = 0; i < this.textboxs.length; i++) {
      this.textboxs[i].key = null;
    }
  }

  constructor(private loginService: LoginService, private modalService: ModalDataService) {


    this.loginService.logged$.subscribe((login: boolean) => {
      this.isLogged = login;
      if (this.isLogged) {
        this.currentUser = loginService.getCurrentUser();
      }
    });

  }

  isProfileClickedFun() {
    if (this.isProfileClicked) {
      this.isProfileClicked = false;

    } else {
      this.isProfileClicked = true;
    }
  }

  doLogout() {
    this.loginService.logout();
    this.isProfileClicked = false;
  }
  ngOnInit() {
    this.isLogged = this.loginService.isLogged();
    if (this.isLogged) {
      this.currentUser = this.loginService.getCurrentUser();
    } else {
      this.currentUser = null;
    }
  }
  login() {
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
