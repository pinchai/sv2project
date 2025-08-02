import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {CartService} from './service/cart-service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public cartService: CartService) {}
  image: string = '1.jpg';
}
