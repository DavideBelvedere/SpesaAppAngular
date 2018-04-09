export class Item{

    id : number;
    imgUrl: string;
    name: string;
    dose: string;
    quantity: number;
    bought: boolean;

    constructor(id:number , imgUrl : string = null, name :string, dose:string, quantity: number, bought: boolean = false){
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.dose = dose;
        this.quantity = quantity;
    }


    setImgUrl(value : string){
        this.imgUrl = value;
    }
    setName(value: string){
        this.name = value;
    }
    setQuantity(value : number){
        this.quantity = value;
    }
    setBought(){
        this.bought = true;
    }
}