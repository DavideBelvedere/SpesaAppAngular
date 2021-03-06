import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.mock';
import { LoginMockService } from '../../Mock/login-mock.service';
import { ListMockService } from '../../Mock/list-mock.service';
import { AddListMockService } from '../../Mock/add-list-mock.service';
import { RemoveListMockService } from '../../Mock/remove-list-mock.service';
import { UpdateListMockService } from '../../Mock/update-list-mock.service';
import { EditItemMockService } from '../../Mock/edit-item-mock.service';
import { RemoveItemMockService } from '../../Mock/remove-item-mock.service';
import { AddItemMockService } from '../../Mock/add-item-mock.service';
import { RecipeMockService } from '../../Mock/recipe-mock.services';

@Injectable()
export class HttpService {

  private tkn: string;
  constructor(private http: HttpClient) { }

  getAuthHeader(header: HttpHeaders) {
    if (header == null || header == undefined) {
      header = new HttpHeaders();
    }
    if (this.tkn) {
      return header.set('Authorization', 'Bearer ' + this.tkn);
    } else {
      return header;
    }
  }

  callGet(idurl: string, header: HttpHeaders = null, callback = null, errorCallback = null) {


    if (!environment.useMock) { // se NON è mock

      // this.http.get(this.utilityService.getBaseUrl() + prova.getUrlService(idurl), { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      //   response => {
      //     if (response.body && response.body as LoginOutput && (response.body as LoginOutput).token) {
      //       this.tkn = (response.body as LoginOutput).token;
      //     }
      //     if (response.headers && response.headers.get("jwt")) {
      //       this.tkn = response.headers.get("jwt");
      //     }
      //     if (callback)
      //       callback(response.body);
      //   },
      //   error => {
      //     if (errorCallback)
      //       errorCallback(error)
      //   }
      // )
    } else { // se è mock

      if (idurl == 'mocked') {
        let mock: LoginMockService = new LoginMockService();
        callback(mock.getMock(idurl));

      } else if (idurl == 'mockedList') {
        let mock: ListMockService = new ListMockService();
        callback(mock.getMock(idurl));

      }else if(idurl == 'mockedRecipe'){
        let mock : RecipeMockService = new RecipeMockService();
        callback(mock.getMock(idurl));
      }

    }

  }
  callPost(body: any, idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null) {
    if (!environment.useMock) {
      // this.http.post(this.utilityService.getBaseUrl() + url, body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      //   response => {
      //     if (response.headers && response.headers.get("jwt")) {
      //       this.tkn = response.headers.get("jwt");
      //     }
      //     if (callback)
      //       callback(response)
      //   },
      //   error => {
      //     if (errorCallback)
      //       errorCallback(error)
      //   }
      // )
    } else {
      if (idUrl == 'addMockedList') {
        let mock: AddListMockService = new AddListMockService();
        callback(mock.getMock(idUrl));
      } else {
        let mock: AddItemMockService = new AddItemMockService();
        callback(mock.getMock(idUrl));
      }
    }
  }

  callPut(body: any, idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null) {
    if (!environment.useMock) {
      // this.http.put(this.utilityService.getBaseUrl() + url, body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      //   response => {
      //     if (response.headers && response.headers.get("jwt")) {
      //       this.tkn = response.headers.get("jwt");
      //     }
      //     if (callback)
      //       callback(response)
      //   },
      //   error => {
      //     if (errorCallback)
      //       errorCallback(error)
      //   }
      // )
    } else {
      if (idUrl == 'updateMockedList') {
        let mock: UpdateListMockService = new UpdateListMockService();
        callback(mock.getMock(idUrl));
      } else {
        let mock: EditItemMockService = new EditItemMockService();
        callback(mock.getMock(idUrl));
      }
    }
  }

  callDelete(id: number, idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null) {
    if (!environment.useMock) {
      // this.http.delete(this.utilityService.getBaseUrl() + url, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      //   response => {
      //     if (response.headers && response.headers.get("jwt")) {
      //       this.tkn = response.headers.get("jwt");
      //     }
      //     if (callback)
      //       callback(response)
      //   },
      //   error => {
      //     if (errorCallback)
      //       errorCallback(error)
      //   }
      // )
    } else {
      if (idUrl == 'removeMockedList') {
        let mock: RemoveListMockService = new RemoveListMockService();
        callback(mock.getMock(idUrl));
      } else {
        let mock: RemoveItemMockService = new RemoveItemMockService();
        callback(mock.getMock(idUrl));
      }
    }
  }

}
