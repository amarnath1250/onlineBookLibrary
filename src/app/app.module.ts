import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BookComponent } from './book/book.component';
import { NumberonlyDirective } from './shared/numberonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBooksComponent,
    AddBooksComponent,
    BooksListComponent,
    HomeComponent,
    BookComponent,
    NumberonlyDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
