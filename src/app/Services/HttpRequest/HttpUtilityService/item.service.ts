import { Injectable } from '@angular/core';
import { Item } from '../../../Model/item';
import { HttpService } from '../http.service';

@Injectable()
export class ItemService {

  constructor(private httpService: HttpService) { }

  


  editItem(body: Item, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPut(
      body,
      'updateMockedItem',
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

  addItem(body: Item, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPost(
      body,
      'addMockedItem',
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

  removeItem(id: number, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callDelete(
      id,
      'removeMockedItem',
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
