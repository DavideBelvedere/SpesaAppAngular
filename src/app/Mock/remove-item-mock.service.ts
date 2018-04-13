import { Injectable } from '@angular/core';
import { BackendResponseEnum } from '../Model/Enum/BackendResponseEnum';

@Injectable()
export class RemoveItemMockService {
  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    removeMockedItem: { mock: removeItemMock, url: 'updateItem' }
  }
  constructor() { }

}
export const removeItemMock: String = BackendResponseEnum.Correct;