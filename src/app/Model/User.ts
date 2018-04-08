export class User {
    username: string;
    email: string;
    imgProfile: string;
    password: string;
    constructor(username: string = "", email: string = "", password: string = "", imgProfile: string = "") {
        this.username = username;
        this.password = password;
        this.imgProfile = imgProfile;
    }
}