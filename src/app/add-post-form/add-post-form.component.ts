import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {

  model: Post = new Post();

  constructor() { }

  ngOnInit() {
  }

  public addPost() {
      console.log('asd');
  }
}
