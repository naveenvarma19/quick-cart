import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Product } from '../product-list/product-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [OrderSummaryComponent, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);
}
