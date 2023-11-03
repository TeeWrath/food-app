import { Injectable } from '@angular/core';
import { Cart } from 'src/shared/models/Cart';
import { Food } from 'src/shared/models/Food';
import { CartItem } from 'src/shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : Cart = new Cart();
  

  changeQuantity(foodId : number, quantity : number) : void{
    let cartItem = this.cart.items.find(item => item.food.id = foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart{
    return this.cart;
  }

  addToCart( food : Food) : void{
    let cartItem = this.cart.items.find(item => item.food.id = food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(id : number) : void{
    // we are keeping every other food item than the said item with id in the cart, hence it is removed
    this.cart.items = this.cart.items.filter(item => item.food.id != id);
  }
}
