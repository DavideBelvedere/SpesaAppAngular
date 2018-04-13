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
import { ItemService } from '../../Services/HttpRequest/HttpUtilityService/item.service';
import { BackendResponseEnum } from '../../Model/Enum/BackendResponseEnum';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
lister : ListItem;
listempty : boolean;
nList : number;

  constructor(private  router : ActivatedRoute, private modalService : ModalDataService, private listService : ListService, private itemService : ItemService) { 

    this.router.params.subscribe(params=>{
      if(params['id'] != '' && params['id'] != null){
        let id = params['id'];
      this.getListById(id);
      }
    });

    if(this.lister.list.length == 0){
      this.listempty = true;
    }else{
      this.listempty = false;
    }
  }

  ngOnInit() {
  
   
  }
  textboxAdd: Textbox[] = [
    new Textbox(null, null, true, "nome prodotto", "text"),
    new Textbox(null, null, true, "dose", "text"),
    new Textbox(null, null, true, "quantità", "text")
  ];
  openModalAdd(){
      this.modalService.showModal(new ModalData("Aggiungi Prodotto", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.addItem(this.textboxAdd[0].getValue(), this.textboxAdd[1].getValue(), this.textboxAdd[2].getValue()) }), true, this.textboxAdd))
  }
  
  opneModalEdit(item :Item){
    let textboxEdit: Textbox[] = [
      new Textbox( null , "nome prodotto:", true, item.name, "text"),
      new Textbox(null, "dose:", true, item.dose, "text"),
      new Textbox(null, "quantità:", true, item.quantity.toString(), "text")
    ]
      this.modalService.showModal(new ModalData("Modifica Prodotto", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.editItem(item, textboxEdit[0].getValue(), textboxEdit[1].getValue(), textboxEdit[2].getValue()) }), true, textboxEdit))
  }

  openModalDelete(item: Item){
    this.modalService.showModal(new ModalData("Elimina prodotto", "Vuoi eliminare il prodotto <strong>" +item.name + "</strong> ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.deleteItem(item) }), null, null))
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
    }, (error) => {
      console.log("error");
    });
}


deleteItem(item : Item){
  this.itemService.removeItem(item.id, 
    (response) =>{
      if(response == BackendResponseEnum.Correct){
          this.lister.list.splice(this.getPositionById(item), 1)
      }
    });

  this.modalService.hideModal();
}

getPositionById(delit : Item){
    for(let item of this.lister.list){
      if(item.id == delit.id){
        return this.lister.list.indexOf(item);
      }
    }
}


addItem(nome : string, dose: string, quanty : string){
  
  let id : number = 200;
  let item = new Item( id, "../../../assets/img/carne.jpeg", nome, dose, parseInt(quanty));
  this.itemService.addItem(item,
  (response) => {
    if(response == BackendResponseEnum.Correct){
      this.lister.list.push(item);
    }
  } )

  this.modalService.hideModal();
}



editItem(item : Item, nome : string, dose: string , quanty : string){

  this.itemService.editItem(item, 
  (response) =>{
    if(response == BackendResponseEnum.Correct){
      item.setDose(dose);
      item.setName(nome);
      item.setQuantity(parseInt(quanty));
    }
  })
  this.modalService.hideModal();
}
}
