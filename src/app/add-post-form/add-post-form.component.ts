import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/models/post';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {

  model: Post = new Post();

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  public addPost() {
    this.api.add(this.model).subscribe(ok => {
      // todo modal?
      alert('Dodano ogłoszenie');
    }, error => {
      alert('Wystąpił bład');
    });
  }
}
