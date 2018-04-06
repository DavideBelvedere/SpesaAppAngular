import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../Model/headerItem';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';

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


  constructor(private loginService: LoginService) { 
    this.loginService.logged$.subscribe((login: boolean) => {
      this.isLogged = login;
    });
  }

  ngOnInit() {
  }

}
