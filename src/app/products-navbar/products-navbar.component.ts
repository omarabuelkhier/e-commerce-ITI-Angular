import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-products-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FontAwesomeModule],
  templateUrl: './products-navbar.component.html',
  styleUrl: './products-navbar.component.css'
})
export class ProductsNavbarComponent {
  counter:any;
  faShopify = faShopify;
  constructor(private counterService: CounterService){
    // this.counterService.getCounter().subscribe(counter => this.counterVal = counter)
  }
  ngOnInit() {
    this.counterService.getCounter().subscribe((res:any)=>{
      this.counter = res;
    })
}
}
