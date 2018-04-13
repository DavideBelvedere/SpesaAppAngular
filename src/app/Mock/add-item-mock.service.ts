import { Injectable } from '@angular/core';
import { BackendResponseEnum } from '../Model/Enum/BackendResponseEnum';

@Injectable()
export class AddItemMockService {

  
  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    addMockedItem: { mock: addItemMock, url: 'updateItem' }
  }

}
export const addItemMock: String = BackendResponseEnum.Correct;