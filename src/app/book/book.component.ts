import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input('title') title: string;
	@Input('author') author: string;
	@Input('description') description: string;
	@Input('count') count: string;
	@Input('bookId') bookId: string;

  	constructor() { }

	ngOnInit() {

  	}

}
