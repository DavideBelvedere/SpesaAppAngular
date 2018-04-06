import { Buttons } from "../Model/Buttons";


export class ModalData{
    title: string;
    subtitle: string;
    confirm: Buttons;
    undo : Buttons;
    showLogin : boolean;
   
    

    constructor(title: string, subtitle : string = "", confirm : Buttons = null, undo: Buttons = null, showLogin = null){
        this.title = title;
        this.subtitle = subtitle;
        this.confirm = confirm;
        this.undo = undo;
        this.showLogin = showLogin;
    }

    setSubtitle(value : string){
        this.subtitle = this.subtitle;
    }

}