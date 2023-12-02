import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit {

  bookservice = inject(BookService)
  ngOnInit(){
  }

}