import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from 'src/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  constructor(private fs : FoodService, private route : ActivatedRoute) {}
  food !: Food[];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.food = this.fs.getFoodbyId(params['id']);
    })
    
  }
}
