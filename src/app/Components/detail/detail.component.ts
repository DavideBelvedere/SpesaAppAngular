import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../../Model/ListItem';
import { User } from '../../Model/User';
import { Item } from '../../Model/item';
import { ModalDataService } from '../../Services/modal.data.service';
import { ModalData } from '../../Model/modal.data';
import { Buttons } from '../../Model/Buttons';
import { Textbox } from '../../Model/Textbox';
import { ListService } from '../../Services/HttpRequest/HttpUtilityService/list.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
lister : ListItem;

nList : number;

  constructor(private  router : ActivatedRoute, private modalService : ModalDataService, private listService : ListService ) { 

    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null){
        let id = params['id'];

        
      this.getListById(id);
      }
    })
  }

  ngOnInit() {
   
  }



  textboxAdd: Textbox[] = [
    new Textbox(null, null, true, "nome prodotto", "text"),
    new Textbox(null, null, true, "dose", "text"),
    new Textbox(null, null, true, "quantità", "text")
  ];

  openModalAdd(){
      this.modalService.showModal(new ModalData("Aggiungi Prodotto", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(this.textboxAdd[0].getValue()) }), true, this.textboxAdd))
  }
  
  opneModalEdit(item :Item){
    let textboxEdit: Textbox[] = [
      new Textbox( null , "nome prodotto:", true, item.name, "text"),
      new Textbox(null, "quantità:", true, item.quantity.toString(), "text"),
      new Textbox(null, "dose:", true, item.dose, "text")
    ]
      this.modalService.showModal(new ModalData("Modifica Prodotto", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log(textboxEdit[0].getValue(), textboxEdit[1].getValue()) }), true, textboxEdit))
  }

  openModalDelete(item: Item){
    this.modalService.showModal(new ModalData("Elimina prodotto", "Vuoi eliminare il prodotto <strong>" +item.name + "</strong> ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { console.log() }), null, null))
  }

  openInfo(id: number , value : boolean){
    let item = this.getItembyId(id);
    item.setShowInfo(value);
}

getItembyId(id: number){
  for(let item of this.lister.list){
    if(item.id == id){
      return item;
    }
  }
}


getListById(id : number){
  this.listService.getListById(id,
    (response) => {
      console.log("success");
        return this.lister =  response;
        
      //this.router.navigate(["/" + RoutingEnum.Home]);
    }, (error) => {
      console.log("error");
    });
}



}
