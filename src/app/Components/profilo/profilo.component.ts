import { Component, OnInit } from '@angular/core';
import { LoginMock } from '../../Mock/login-mock.service';
import { LoginService } from '../../Services/HttpRequest/HttpUtilityService/login.service';
import { User } from '../../Model/User';

@Component({
  selector: 'profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  getUser(): User {
    return (JSON.parse(sessionStorage.getItem('user')) as User);
  }

}
