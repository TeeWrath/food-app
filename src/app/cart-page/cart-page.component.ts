import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from 'src/shared/models/Cart';
import { CartItem } from 'src/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart !: Cart;
  constructor(private cartService : CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem : CartItem, Stringquantity : string){
    const quantity = parseInt(Stringquantity);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
