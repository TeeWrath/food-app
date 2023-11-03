import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm : String = "";
  constructor(private rt : ActivatedRoute){}

  ngOnInit(): void {
    this.rt.params.subscribe(params => {
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    })
  }
}
