import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
{
  path:'products',
  component: ProductsListComponent,
  title: 'Products List',

},
{
  path:'cart',
  component:CartComponent,
  title: 'Cart List',

},
 { path: '', redirectTo: 'products', pathMatch: 'full' },
 {
  path:'product-detail/:id', component:ProductDetailComponent,
  title: 'Product Detail',
 },
  { path: 'login' ,component: LoginComponent ,title: 'Login'},

  { path: 'register', component: RegisterComponent, title: 'Register'},
  {path:'**',component:NotFoundComponent, title: 'Not Found'},

];
