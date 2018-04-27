import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Inject} from '@angular/compiler/src/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchBoxControl: FormControl = new FormControl();

  @Input() public phrase;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.phrase) {
      this.searchBoxControl.setValue(this.phrase);
    }
  }

  public search() {
    const value = this.searchBoxControl.value;
    if (value && (value as string).length > 3) {
      this.router.navigate([`/search/${value}`]);
    }
  }


}
