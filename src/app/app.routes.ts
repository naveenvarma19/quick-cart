import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
