import { Component } from '@angular/core';
import { LoginService } from './Services/HttpRequest/HttpUtilityService/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean = false;
  title = 'app';
  constructor(private loginService: LoginService) { 
    this.loginService.logged$.subscribe((login: boolean) => {
      this.isLogged = login;
    });
  }
}
