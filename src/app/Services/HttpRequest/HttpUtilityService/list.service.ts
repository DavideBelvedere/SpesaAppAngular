import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ListItem } from '../../../Model/ListItem';

@Injectable()
export class ListService {

  constructor(private httpService: HttpService) { }

  retrieveList(callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'mockedList',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }



  getListById(id: number, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'mockedList',
      null,
      (response: ListItem[]) => {
        let list: ListItem;
        response.forEach(item => {
          if (item.id.toString() === id.toString()) {
            list = item;
            
          }
        });
        if (callback && list)
          callback(list);
        else {
          if (errorCallBack)
            errorCallBack(null)
        }
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

  editList(body: ListItem, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPut(
      body,
      'updateMockedList',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

  addList(body: ListItem, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPost(
      body,
      'addMockedList',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

  removeList(id: string, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callDelete(
      id,
      'removeMockedList',
      null,
      (response) => {
        if (callback)
          callback(response)
      },
      (error) => {
        if (errorCallBack)
          errorCallBack(error)
      });
  }

}
