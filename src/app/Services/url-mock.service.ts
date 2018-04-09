import { Injectable } from '@angular/core';

@Injectable()
export class UrlMockUtilsService {

    getMock(id: string): any {
        return this.serviceMap[id] ? this.serviceMap[id].mock : "";
    }

    getUrlService(id: string): any {
        return this.serviceMap[id] ? this.serviceMap[id].url : "";
    }

    serviceMap: { [key: string]: any; } = {
        moccked: { mock: LoginMock, url: 'auth/login' }
    }
}

export const LoginMock =
    {
        user: "Mario Rossi",
        email: "mario.rossi@gmail.com"
    }