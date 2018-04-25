import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../shared/models/post';

@Component({
  selector: 'app-post-full',
  templateUrl: './post-full.component.html',
  styleUrls: ['./post-full.component.css']
})
export class PostFullComponent implements OnInit {

  private id: number;

  public post: Post = new Post;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.api.get(this.id).subscribe(ok => {
      this.post = ok;
    });

  }

}
