import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../shared/models/post';

@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.component.html',
  styleUrls: ['./post-short.component.css']
})
export class PostShortComponent implements OnInit {

  @Input() public post: Post;

  constructor() {
  }

  ngOnInit() {
  }

}
