import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';


@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(root: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isLogged()) {
      return true;
    } else {
      this.router.navigate(["/"+RoutingEnum.Home]);
      return false;
    }
  }
}
