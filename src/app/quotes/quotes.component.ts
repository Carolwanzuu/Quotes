import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title:'Quotes';
  quotes:Quote[]=[
    new Quote(1, 'Anais Nin', 'We write to taste life twice, in the moment and in retrospect', new Date(2021,4,20)),
    new Quote(2, 'Mark Twain', 'One day I will find the right words, and they will be simple.', new Date(2018,10,13)),
    new Quote(3, 'Robert Frost', 'No tears in the writer, no tears in the reader.', new Date(2014,6, 29)),
    new Quote(4, 'Henry David', 'How vain it is to sit down to write when you have not stood up to live.',new Date(2020,1,12)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
    
    if(toDelete){
      this.quotes.splice(index, 1);
    }
  }
}
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      // quoteLength.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
  
    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;
    }

    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes-1;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
