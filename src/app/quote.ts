export class Quote {
    // id:number;
    // name:string;
    // description:string;
    showDescription:boolean;
    constructor(public id:number, public author:string, public description:string, public name:string, public completeDate: any){
        this.showDescription=false;
    }
}
