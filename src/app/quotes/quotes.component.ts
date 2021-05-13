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
    new Quote(1, 'Anais Nin', 'We write to taste life twice, in the moment and in retrospect'),
    new Quote(2, 'Mark Twain', 'One day I will find the right words, and they will be simple.'),
    new Quote(3, 'Robert Frost', 'No tears in the writer, no tears in the reader.'),
    new Quote(4, 'Henry David', 'How vain it is to sit down to write when you have not stood up to live.'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
