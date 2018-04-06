export class Buttons{
   title: string;
   callback : any;
   show: boolean;

   constructor(title : string, callback = null, show:boolean = true){
       this.title = title;
       this.callback = callback;
       this.show = show;
   }

setShow(value : boolean){
    this.show = value;
}

}