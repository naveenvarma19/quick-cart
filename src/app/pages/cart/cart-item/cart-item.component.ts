import { Component, inject, input } from '@angular/core';
import { Product } from '../../product-list/product-list.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
