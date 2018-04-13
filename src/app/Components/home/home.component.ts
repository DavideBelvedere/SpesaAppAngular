import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../../Model/User';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../Model/Enum/RoutingEnum';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User = new User("prova", "prova");
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        sessionStorage.setItem("user", JSON.stringify(response));
        this.loginService.nextLogged(true);
        this.router.navigate(["/" + RoutingEnum.List]);
      }, (error) => {
        console.log("error");
      });
  }
  
  sendMessage(){
  }

}
