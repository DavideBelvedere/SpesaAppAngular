import { Buttons } from "../Model/Buttons";
import { Textbox } from "../Model/Textbox";
import { T } from "@angular/core/src/render3";

export class ModalData{
    title: string;
    subtitle: string;
    confirm: Buttons;
    undo : Buttons;
    showLogin : boolean;
    textboxs : Textbox[];

    constructor(title: string, subtitle : string = "", confirm : Buttons = null, undo: Buttons = null, showLogin = null, textboxs :Textbox[]){
        this.title = title;
        this.subtitle = subtitle;
        this.confirm = confirm;
        this.undo = undo;
        this.showLogin = showLogin;
        this.textboxs = textboxs;
    
    }

    setSubtitle(value : string){
        this.subtitle = this.subtitle;
    }
    

}