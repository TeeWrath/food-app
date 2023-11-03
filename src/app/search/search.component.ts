import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm : String = "";
  constructor(private rt : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.rt.params.subscribe(params => {
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  search() : void {
    if (this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }
}
