export class Quote {
    // id:number;
    // name:string;
    // description:string;
    showDescription:boolean;
    constructor(public id:number, public name:string, public description:string, public author:string, public completeDate: any){
        this.showDescription=false;
    }
}
