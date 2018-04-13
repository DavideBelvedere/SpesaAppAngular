import { Injectable } from '@angular/core';
import { BackendResponseEnum } from '../Model/Enum/BackendResponseEnum';

@Injectable()
export class UpdateListMockService {

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: { [key: string]: any; } = {
    updateMockedList: { mock: updateListMock, url: 'updateList' }
  }

  constructor() { }


}
export const updateListMock: String = BackendResponseEnum.Correct;