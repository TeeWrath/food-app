import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from 'src/shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent {
  constructor(
    private fs: FoodService,
    private route: ActivatedRoute,
    private cartservice: CartService,
    private router: Router
  ) {}

  food!: Food[];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.food = this.fs.getFoodbyId(params['id']);
    });
  }

  addToCart(): void {
    // console.log(this.food[0]);
    this.cartservice.addToCart(this.food[0]);
    this.router.navigate(['/cart-page']);
  }
}
