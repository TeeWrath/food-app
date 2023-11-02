import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from 'src/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods !: Food[];
  constructor(private fs : FoodService){}
  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
}
