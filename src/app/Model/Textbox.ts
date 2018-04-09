export class Textbox{
    show : boolean;
    value : string;
    label: string;
    key: string;
    type: string;

    constructor(value : string, label : string, show : boolean, key : string , type:string){
        this.setValue(value);
        this.label = label;
        this.show = show;
        this.key = key;
        this.type = type;
    }

    getValue(){
        return this.value;
    }

    setValue(valuee : string){
        this.value = valuee;
    }
}