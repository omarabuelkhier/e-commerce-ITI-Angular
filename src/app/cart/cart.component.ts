import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { CartCountComponent } from '../cart-count/cart-count.component';
import { RouterLink,Router, ActivatedRoute } from '@angular/router';
import { ProductsRequestService } from '../services/products-request.service';
import { CounterService } from '../services/counter.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,ProductsListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() id: string='';
   @Input() counter:number=1;
     cvalue:any;

    cartService= inject(ProductService);
    counterservice=inject(CounterService);
   cartProducts:any;

  constructor(private actiavtedRoute : ActivatedRoute,public router: Router) {
    this.id = this.actiavtedRoute.snapshot.params['id'];
  }
  @Output() sendToParent = new EventEmitter<number>();


  private productsRequestService=inject(ProductsRequestService);

ngOnInit(){
  this.cartProducts=this.cartService.getCart();
  console.log(this.cartProducts);



}
  navigateToHome() {

  this.router.navigate([`/products`]);
}
handleDeleteProduct(item: number) {
    console.log('FROM CHILD', item);
    // this.sendToParent.emit(item);
    const index = this.cartProducts.indexOf(item);
    if (index !== -1) {
      this.cartProducts.splice(index, 1);
      this.counterservice.setCounter(this.counter-1);
    }
  }
     decreaseCounter(){
    this.counterservice.setCounter(this.counter - 1)

    this.cvalue-=1;

  }
  increaseCounter(){
    this.counterservice.setCounter(this.counter + 1)
    this.cvalue+=1;
  }

}
