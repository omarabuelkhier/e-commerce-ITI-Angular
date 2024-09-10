import { Component, inject, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { ProductsRequestService } from '../services/products-request.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [StarsComponent,RouterLink ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productDetails:any;
  @Input() id: string='';
  constructor(private actiavtedRoute : ActivatedRoute) {
    this.id = this.actiavtedRoute.snapshot.params['id'];
  }
  private productsRequestService=inject(ProductsRequestService);

ngOnInit(){
  this.productsRequestService.
  getProductDetails(this.id).
  subscribe((val)=>(this.productDetails= val ));


}

}
