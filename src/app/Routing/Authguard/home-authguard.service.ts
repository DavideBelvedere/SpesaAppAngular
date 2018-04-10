import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';

@Injectable()
export class HomeAuthguardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate() {
    if (this.loginService.isLogged()) {
      this.router.navigate(["/"+RoutingEnum.List]);
      return false;
    } else {

      return true;
    }
  }



}