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
  
  constructor() { }

  ngOnInit() {
  }
  
}
