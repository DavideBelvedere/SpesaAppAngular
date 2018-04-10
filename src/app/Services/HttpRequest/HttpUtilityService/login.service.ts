import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../../../Model/User';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../Model/Enum/RoutingEnum';

@Injectable()
export class LoginService {
  private logged: Subject<boolean> = new Subject<boolean>();
  public logged$ = this.logged.asObservable();


  constructor(private httpService: HttpService, private router: Router) { }

  public nextLogged(logged: boolean) {
    this.logged.next(logged);
  }
  executeLogin(user: User, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    let header = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.username + ":" + user.password)
    });
    this.httpService.callGet(
      'mocked',
      header,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }



  isLogged(): boolean {
    if (sessionStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }

  getCurrentUser(): User {
    return (JSON.parse(sessionStorage.getItem('user')) as User);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.logged.next(false);
    this.router.navigate(["/" + RoutingEnum.Home]);
  }


}
