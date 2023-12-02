import { Component, inject } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  bookService = inject(BookService)
  updateCount(){
    this.bookService.setCount();
  }

}
