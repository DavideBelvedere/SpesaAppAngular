import { Injectable } from '@angular/core';
import { BackendResponseEnum } from '../Model/Enum/BackendResponseEnum';

@Injectable()
export class RemoveListMockService {
  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    removeMockedList: { mock: removeListMock, url: 'updateList' }
  }

  constructor() { }

}
export const removeListMock: String = BackendResponseEnum.Correct;

