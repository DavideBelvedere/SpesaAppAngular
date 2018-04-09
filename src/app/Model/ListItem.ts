import { User } from "./User";
import { Item } from "./item";

export class ListItem{

    id: number;
    name: string;
    user : User;
    list : Item[];

    constructor(id : number, name: string, user : User, list : Item[] = null){
        this.id = id;
        this.name = name;
        this.user = user;
        this.list = list;
    }

    setName(value:string){
        this.name = name;
    }

    getList(){
        return this.list;
    }


}