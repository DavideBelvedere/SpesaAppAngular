import { Injectable } from '@angular/core';
import { BackendResponseEnum } from '../Model/Enum/BackendResponseEnum';

@Injectable()
export class EditItemMockService {

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    updateMockedItem: { mock: updateItemMock, url: 'updateItem' }
  }

  constructor() { }

}
export const updateItemMock: String = BackendResponseEnum.Correct;