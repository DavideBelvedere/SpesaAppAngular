export class Item{

    id : number;
    imgUrl: string;
    name: string;
    dose: string;
    quantity: number;
    bought: boolean;
    showInfo : boolean;

    constructor(id:number , imgUrl : string = null, name :string, dose:string, quantity: number, bought: boolean = false , showInfo: boolean = false){
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.dose = dose;
        this.quantity = quantity;
        this.showInfo = showInfo;
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
    setShowInfo(value : boolean){
        this.showInfo = value;
    }
}