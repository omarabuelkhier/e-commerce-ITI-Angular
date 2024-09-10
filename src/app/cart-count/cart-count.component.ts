import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-count',
  standalone: true,
  imports: [],
  templateUrl: './cart-count.component.html',
  styleUrl: './cart-count.component.css'
})
export class CartCountComponent {
   @Input() counterVal = 0;
  constructor(private counterService: CounterService){}
   ngOnInit(){
    this.counterService.getCounter().subscribe(counter => this.counterVal = counter)
  }
   decreaseCounter(item: number){
    this.counterService.setCounter(this.counterVal - 1)
  }
  increaseCounter(item: number){
    this.counterService.setCounter(this.counterVal + 1)
  }


}
