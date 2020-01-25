import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksListComponent } from './books-list/books-list.component';


const routes: Routes = [
	{ 
	    path: 'home',
	    component: HomeComponent
	},
	{ 
	    path: 'search-books',
	    component: SearchBooksComponent
	},
	{ 
	    path: 'add-books',
	    component: AddBooksComponent
	},
	{ 
	    path: 'books-list',
	    component: BooksListComponent
	},
	{ 
	    path: '**', 
	    redirectTo: 'home'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
