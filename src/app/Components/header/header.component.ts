import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../Model/headerItem';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../../Model/User';

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

  isProfileClickedFun() {
    if (this.isProfileClicked) {
      this.isProfileClicked = false;

    } else {
      this.isProfileClicked = true;
    }

  }

  constructor(private loginService: LoginService) {
    this.loginService.logged$.subscribe((login: boolean) => {
      this.isLogged = login;
      if (this.isLogged) {
        this.currentUser = loginService.getCurrentUser();
      }
    });
  }

  doLogout() {
    this.loginService.logout();
    this.isProfileClicked = false;
  }
  ngOnInit() {
    this.isLogged = this.loginService.isLogged();
    if (this.isLogged) {
      this.currentUser = this.loginService.getCurrentUser();
    } else{
      this.currentUser=null;
    }
  }

}
