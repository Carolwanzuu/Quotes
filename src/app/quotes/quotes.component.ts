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
    new Quote(1, 'Anais Nin', 'We write to taste life twice, in the moment and in retrospect','Swinter', new Date(2021,4,20)),
    new Quote(2, 'Mark Twain', 'One day I will find the right words, and they will be simple.', 'Chacha', new Date(2018,10,13)),
    new Quote(3, 'Robert Frost', 'No tears in the writer, no tears in the reader.', 'Debby', new Date(2014,6, 29)),
    new Quote(4, 'Henry David', 'How vain it is to sit down to write when you have not stood up to live.','Milton', new Date(2020,1,12)),
    new Quote(5, 'Harper Lee','You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.','Cliff', new Date(2015,7,22)),
    new Quote(6, 'John Keats', 'I was never afraid of failure; for I would sooner fail than not be among the greatest.', 'Carol', new Date(2019,11,23))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
    
    if(toDelete){
      this.quotes.splice(index, 1);
    }
  }
}
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
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
