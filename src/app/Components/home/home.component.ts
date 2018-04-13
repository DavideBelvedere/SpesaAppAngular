import { Component, OnInit } from '@angular/core';
import { ListService } from '../../Services/HttpRequest/HttpUtilityService/list.service';
import { Item } from '../../Model/item';
import { ListItem } from '../../Model/ListItem';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private listService: ListService) { }

  ngOnInit() {
  }


}
