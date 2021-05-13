import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:Quote[]=[
    {id:1, name:'Anais Nin', description:'We write to taste life twice, in the moment and in retrospect'},
    {id:2, name:'Mark Twain', description:'One day I will find the right words, and they will be simple.'},
    {id:3, name:'Robert Frost', description:'No tears in the writer, no tears in the reader.'},
    {id:4, name:'Henry David', description:'How vain it is to sit down to write when you have not stood up to live.'},
  ];
}
