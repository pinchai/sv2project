import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any = [];
  @Output() addToCart: any = new EventEmitter<any>();

  onAddToCart(product: any) {
    return this.addToCart.emit(product);
  }
}
