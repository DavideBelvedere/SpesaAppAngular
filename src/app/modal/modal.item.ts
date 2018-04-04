export class modalItem{
    id: string;
    title: string;
    subtitle: string;
    confirm: boolean;
    input: string;
    

    constructor(id: string = "", title: string = "", subtitle: string = "", confirm : boolean = null, input: string = ""){
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.confirm = confirm;
        this.input = input;
    }


}