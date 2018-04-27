import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddPost() {
    this.router.navigate(['/add']);
  }
}
