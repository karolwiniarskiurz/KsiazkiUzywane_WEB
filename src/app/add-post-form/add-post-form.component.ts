import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/models/post';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {

  model: Post = new Post();

  constructor(private api: ApiService, private router: Router) {
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

  navigateHome() {
    this.router.navigate(['']);
  }
}
