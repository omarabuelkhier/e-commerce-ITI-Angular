import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private product: any[] = [];

   addToCart(data: any) {
    this.product.push(data);
   }
   getCart() {
    return this.product;
   }
  constructor() { }

}
