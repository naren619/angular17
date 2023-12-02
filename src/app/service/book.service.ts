import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { 
    effect(()=> {
      console.log("bookservice setcount effect", this.count())

    })
  }
  a = 12;
  count = signal(this.a);

  setCount() {
    this.a = this.a +1;
    this.count.set(this.a);
    console.log("bookservice setcount count", this.count())
  }

  // getCount() {  
  //   return this.count;
  // }

}
