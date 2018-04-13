import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDataService } from '../../Services/modal.data.service';
import { ModalData } from '../../Model/modal.data';
import { Textbox } from '../../Model/Textbox';
import { Buttons } from '../../Model/Buttons';
import { ListItem } from '../../Model/ListItem';
import { createElement } from '@angular/core/src/view/element';
import { User } from '../../Model/User';
import { Item } from '../../Model/item';
import { Router } from '@angular/router';
import { ListService } from '../../Services/HttpRequest/HttpUtilityService/list.service';
import { SubtitleUtilitiesService } from '../../Services/subtitleUtilities.service';
import { removeSummaryDuplicates } from '@angular/compiler';
import { BackendResponseEnum } from '../../Model/Enum/BackendResponseEnum';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  show: boolean = false;

  lists: ListItem[];
  listLength: number;
  constructor(private modalService: ModalDataService, private listService: ListService, private subtitleUtilitiesService: SubtitleUtilitiesService) { }

  ngOnInit() {
    this.getLists();
    this.listLength = this.lists.length;

    if (this.listLength == 0) {
      this.subtitleUtilitiesService.nextNumberList("Nessuna Lista Presente");
    } else {
      this.subtitleUtilitiesService.nextNumberList(this.lists.length + " Liste Salvate");

    }
    for (let item of this.lists) {
      this.showInfo(item.id, false);
    }

  }


  openModalDelete(name: string, id: number) {
    this.modalService.showModal(new ModalData("elimina lista", "vuoi eliminare la lista <strong>" + name + "</strong> ?", new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.removeList(id) }), null, null));

  }
  textboxAdd: Textbox[] = [
    new Textbox("nome della lista", "nome lista:", true, "nome lista", "text"),
    new Textbox("descrizione", "descrizione:", true, "descrizione", "text")
  ];

  openModalAddList() {
    this.modalService.showModal(new ModalData("Aggiungi lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.addList(this.textboxAdd[0].getValue(), this.textboxAdd[1].getValue()) }), true, this.textboxAdd))
  }

  openModalEditList(id: number, listName: string, listDesc: string) {

    let textboxEdit: Textbox[] = [
      new Textbox(listName, "nome lista:", true, listName, "text"),
      new Textbox(listDesc, "descrizione:", true, listDesc, "text")
    ]
    this.modalService.showModal(new ModalData("Modifica lista", null, new Buttons("Annulla", () => { this.modalService.hideModal() }), new Buttons("Conferma", () => { this.editList(id,textboxEdit[0].getValue(),textboxEdit[1].getValue(),)}), true, textboxEdit))
  }
  showInfo(id: number, value: boolean) {
    let item = this.getListbyId(id);
    item.showInfo(value);
  }

  getListbyId(id: number) {
    for (let item of this.lists) {
      if (item.id == id) {
        return item;
      }
    }
  }


  removeList(id: number) {

    this.listService.removeList(
      id,
      (response) => {
        if (response == BackendResponseEnum.Correct) {
          this.lists.splice(this.listService.getPositionFromId(this.lists, id), 1); this.modalService.hideModal();
        }
      }, (error) => {
        console.log("error");
      });
  }

  getLists() {
    this.listService.retrieveList(
      (response) => {
        this.lists = response;
      }, (error) => {
        console.log("error");
      });
  }

  editList(id: number, name: string, description: string) {
   let editedList: ListItem = new ListItem(id, name, JSON.parse(sessionStorage.getItem("user")), "", null, false, description);
    this.listService.editList(
     editedList,
      (response) => {
        if (response == BackendResponseEnum.Correct) {
          this.lists[this.listService.getPositionFromId(this.lists,id)].setName(editedList.name);
          this.lists[this.listService.getPositionFromId(this.lists,id)].setDescription(editedList.description);
        }
        this.modalService.hideModal();
      }, (error) => {
        console.log("error");
      });
  }

  addList(name: string, description: string){
    let listItem: Item[] = [
      new Item(11, "../../../assets/img/carne.jpg", "leprecaun", "4kg", 0, false),
      new Item(12, "../../assets/img/carne.jpeg", "lollipop", "900grammi", 3, false),
      
    ];
    let addedList:ListItem=new ListItem((this.lists.length+1), name, JSON.parse(sessionStorage.getItem('user')), "../../assets/img/carne.jpeg", listItem, false, description);

    this.listService.addList(
      addedList,
      (response) => {
        if (response == BackendResponseEnum.Correct) {
          this.lists.push(addedList);
          this.showInfo(addedList.id,false);
        }
        this.modalService.hideModal();
      }, (error) => {
        console.log("error");
      });
  }





}