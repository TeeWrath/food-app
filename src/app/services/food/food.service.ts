import { Injectable } from '@angular/core';
import { Food } from 'src/shared/models/Food';
import { Tag } from 'src/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllbySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFoodbyId(id : number) : Food[]{
    return this.getAll().filter((food) => food.id == id)
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/food/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle east', 'China'],
        imageUrl: '/assets/images/food/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'Us'],
        imageUrl: '/assets/images/food/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France'],
        imageUrl: '/assets/images/food/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/food/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/food/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }

  getAllbyTag(params: string): Food[] {
    // using ternary operator to shorten the code
    return params == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(params));
  }
}
