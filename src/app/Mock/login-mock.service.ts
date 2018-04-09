import { Injectable } from '@angular/core';

@Injectable()
export class LoginMockService {

    getMock(id: string): any {
        return this.serviceMap[id] ? this.serviceMap[id].mock : "";
    }

    getUrlService(id: string): any {
        return this.serviceMap[id] ? this.serviceMap[id].url : "";
    }

    serviceMap: { [key: string]: any; } = {
        mocked: { mock: LoginMock, url: 'auth/login' }
    }
}

export const LoginMock =
    {
        username: "Mario Rossi",
        email: "mario.rossi@gmail.com",
        imgProfile: "../../assets/img/image-profile.png"
    }