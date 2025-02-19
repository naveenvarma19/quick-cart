import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  constructor() {}

  addToCart(product: Product) {
    this.cart.set([
      ...this.cart(),
      { ...product, stock: product.stock && product.stock-- },
    ]);
  }
}
