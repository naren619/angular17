import { Component, OnInit, Signal, WritableSignal, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ang17App';

  constructor(){
    effect(() => {
      console.log("effect", this.count());
    })
  }

  ngOnInit(){
    console.log("ngoninit")
    console.log("count", this.count())
    console.log("count1", this.count1())
    console.log("isEven", this.isEven())
  }

  count : WritableSignal<number> = signal(101)
  count1 : Signal<number> = signal(11)

  isEven: Signal<boolean> = computed(()=>{
    return (this.count1() % 2 == 0) ? true : false;
  })

  updateCount() {
    this.count.update(m=>m+1);
  }
  
}
