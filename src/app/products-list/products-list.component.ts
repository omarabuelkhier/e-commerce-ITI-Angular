import { Component, inject } from '@angular/core';
import { ProductsRequestService } from '../services/products-request.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
interface Product {
  id?: number;
  name?: string;
  title?: string;
  stock?: number;
  thumbnail?:string;
  category?: string;
  description?: string;
  price?: number;
  rating: number;
  images?: string;
  tags?: string;
  availabilityStatus?: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent,RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  productsList:any;
  constructor(private productsRequestService: ProductsRequestService){

  }
  ngOnInit(){
this.productsRequestService
.getProductsList()
.subscribe((data:any)=>(this.productsList=data.products))
  }
   reciveFromChild(id: number) {
    console.log('FROM PARENT', id);
   }

}
