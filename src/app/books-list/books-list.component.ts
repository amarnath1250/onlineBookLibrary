import { Component, OnInit } from '@angular/core';
import sampleData from '../../data.json';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

	Books: any = sampleData;

	constructor() { }

	ngOnInit() {
	}

}
