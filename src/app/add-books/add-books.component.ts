import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder ,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import sampleData from '../../data.json';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

	Books: any = sampleData;
	addBookForm:FormGroup;
	booksAdded:boolean= false;
	submitted:boolean = false;
	idFromUrl:String;

	constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {

		this.route.queryParams.subscribe(params => {
          if(params['id']){
          	this.idFromUrl = params['id'];
          }
      });

	}

	ngOnInit() {
		this.addBookFormValidation();
	}
	addBookFormValidation(){
		this.addBookForm = this.formBuilder.group({
            bookName: ['',[ Validators.required,Validators.pattern(/^[a-zA-Z0-9 \'\-\.\_,;:()]*$/)]],
            authorName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9 \'\-\.\_,;:()]*$/)]],
            bookDescription: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9 \'\-\.\_,;:()]*$/)]],
            count: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
      	});
      	if(this.idFromUrl){
      		this.Books.forEach((val) => {
      			if(val.id == this.idFromUrl){
      				let bookName =  val.title;
					let authorName =  val.author;
					let bookDescription =  val.description;
					let count =  val.count;
					(<FormGroup>this.addBookForm).patchValue({
		                bookName : bookName,
		                authorName : authorName,
		                bookDescription : bookDescription,
		                count : count
		            });
      			}
      		})	
      	}
	}
	onSubmit(){
		this.submitted = true;
		this.booksAdded = false;
		console.log(this.addBookForm.invalid);
		if(!this.addBookForm.invalid){
			let bookName =  this.addBookForm.value.bookName;
			let authorName =  this.addBookForm.value.authorName;
			let bookDescription =  this.addBookForm.value.bookDescription;
			let count =  this.addBookForm.value.count;
			
			if(this.idFromUrl){
				this.Books.forEach((val) => {
	      			if(val.id == this.idFromUrl){
	      				val.title = bookName;
						val.author = authorName;
						val.description = bookDescription;
						val.count = count;
	      			}
	      		})	
			}else{
				let totalBooksInStore = this.Books.length + 1;
				let customObj = {
				  "id": totalBooksInStore,
				  "title": bookName,
				  "author": authorName,
				  "description": bookDescription,
				  "count": count
				}
				this.Books.push(customObj);
			}
			this.booksAdded = true;
		}
	}
}
