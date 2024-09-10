import { Component, Input,EventEmitter,Output, inject } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { RouterLink,Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StarsComponent,RouterLink,],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  productService= inject(ProductService)

@Input() productData:any;
  @Output() sendToParent = new EventEmitter<number>();

constructor(private router:Router){}
  navigateToDetails(id: number) {
        this.sendToParent.emit(id);

  this.router.navigate([`/cart`]);


}
 addToCart(x:any){
    this.productService.addToCart(x);
    // console.warn(x);
   }

}
