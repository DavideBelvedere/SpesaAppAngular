import { User } from "./User";
import { Item } from "./item";

export class ListItem{

    id: number;
    name: string;
    user : User;
    imgUrl: string;
    list : Item[];
    info : boolean;

    constructor(id : number, name: string, user : User, imgUrl :string, list : Item[] = null,info: boolean = false){
        this.id = id;
        this.name = name;
        this.user = user;
        this.imgUrl = imgUrl;
        this.list = list;
    }

    setImage(value:string){
        this.imgUrl = value;
    }

    showInfo(value:boolean){
        this.info = value;
    }
    setName(value:string){
        this.name = name;
    }

    getList(){
        return this.list;
    }


}