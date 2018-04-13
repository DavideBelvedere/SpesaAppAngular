import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../Model/ListItem';
import { ActivatedRoute } from '@angular/router';
import { ModalDataService } from '../../Services/modal.data.service';
import { User } from '../../Model/User';
import { Item } from '../../Model/item';
import { Textbox } from '../../Model/Textbox';
import { ModalData } from '../../Model/modal.data';
import { Buttons } from '../../Model/Buttons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  lister : ListItem;
  
  nList : number;
  
    constructor(private  router : ActivatedRoute, private modalService : ModalDataService) { 
  
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
      new Item(2,"def","olio","5kg",4,false),
      new Item(3,"def","olio","5kg",4,false),
      new Item(4,"def","olio","5kg",4,false)
   ]
  
    lists: ListItem[] = [
      new ListItem(0,"lista spesa", this.user,"frr",this.listaone),
      new ListItem(1,"lista capanna", this.user,"frfr", this.listaone)
    ];
  
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
    for(let item of this.listaone){
      if(item.id == id){
        return item;
      }
    }
  }
  
  }
  