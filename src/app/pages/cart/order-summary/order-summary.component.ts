import { Component, computed, input } from '@angular/core';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { Product } from '../../product-list/product-list.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent {
  cart = input.required<Product[]>();
  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );
}
