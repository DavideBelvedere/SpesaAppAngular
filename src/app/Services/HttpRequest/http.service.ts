import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.mock';
import { UrlMockUtilsService } from '../url-mock.service';

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
    
    let prova: UrlMockUtilsService = new UrlMockUtilsService();
    if(!environment.useMock){ // se NON è mock
      
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
    }else{ // se è mock
      callback(prova.getMock(idurl));
      
    }
    
  }

}
