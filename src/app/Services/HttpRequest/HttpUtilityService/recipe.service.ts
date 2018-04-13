import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ListItem } from '../../../Model/ListItem';

@Injectable()
export class RecipeService {

  constructor(private httpService: HttpService) { }

  retrieveRecipe(callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'mockedRecipe',
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



  getRecipeById(id: number, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callGet(
      'mockedRecipe',
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

  editRecipe(body: ListItem, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPut(
      body,
      'updateMockedRecipe',
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

  addRecipe(body: ListItem, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callPost(
      body,
      'addMockedRecipe',
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

  removeRecipe(id: number, callback: (response: any) => void = null, errorCallBack: (error: any) => void = null) {
    this.httpService.callDelete(
      id,
      'removeMockedRecipe',
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