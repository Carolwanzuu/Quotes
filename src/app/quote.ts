export class Quote {
    // id:number;
    // name:string;
    // description:string;
    showDescription: boolean;
    constructor(public id: number,
        public name: string,
        public description: string,
        public author: string,
        public completeDate: Date,
        public upVote:number,
        public downVote:number,)
        {
        this.showDescription = false;
    }
}
