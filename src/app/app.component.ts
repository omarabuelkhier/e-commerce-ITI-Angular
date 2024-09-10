import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarsComponent } from "./stars/stars.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsNavbarComponent } from "./products-navbar/products-navbar.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
interface Product {
  id: number;
  name: string;
  title: string;
  stock: number;
  thumbnail:string;
  category: string;
  description: string;
  price: number;
  rating: number;
  images?: string;
  tags: string;
  availabilityStatus: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarsComponent, ProductsListComponent,
     ProductsNavbarComponent,LoginComponent,
      RegisterComponent,ProductsNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Advanceed-eCommerce';
}
