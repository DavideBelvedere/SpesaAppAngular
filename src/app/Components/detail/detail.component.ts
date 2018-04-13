import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../../Model/ListItem';
import { User } from '../../Model/User';
import { Item } from '../../Model/item';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
lister : ListItem;

nList : number;

  constructor(private  router : ActivatedRoute) { 

    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null){
       this.lister = this.getListbyId(params['id']);
      }
    })
  }

  ngOnInit() {
    this.nList = this.lists.length;
  }

  getListbyId(id: number){
    for(let item of this.lists){
      if(item.id == id){
        return item;
      }
    }
  }


  user : User = new User("matteo","bell","eff","def");


  listaone : Item[] = [
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false),
    new Item(1,"def","olio","5kg",4,false)
 ]

  lists: ListItem[] = [
    new ListItem(0,"lista spesa", this.user,"frr",this.listaone),
    new ListItem(1,"lista capanna", this.user,"frfr", this.listaone)
  ];

  

}
