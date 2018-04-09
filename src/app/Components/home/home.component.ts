import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../../Model/User';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User = new User("prova", "prova");
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        sessionStorage.setItem("user", JSON.stringify(response));
        this.loginService.nextLogged(true);
        //this.router.navigate(["/" + RoutingEnum.Home]);
      }, (error) => {
        console.log("error");
      });
  }
}
