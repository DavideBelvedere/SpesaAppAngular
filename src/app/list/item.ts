export class Item{

    name: string;
    description: string;

    constructor(name :string,description:string ){
        this.name = name;
        this.description = description;
    }


    setDescription(value : string){
        this.description = value;
    }

    setName(value: string){
        this.name = value;
    }
}