import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchBoxControl: FormControl = new FormControl();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public search() {
    const value = this.searchBoxControl.value;
    if (value) {
      this.router.navigate([`/search`, {phrase: value}]);
      console.log(this.searchBoxControl.value);
    }
  }


}
