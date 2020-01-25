import { Component, OnInit } from '@angular/core';
import sampleData from '../../data.json';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

	Books: any = sampleData;
	searchText:String;

  	constructor() { }

  	ngOnInit() {
  	}

}
