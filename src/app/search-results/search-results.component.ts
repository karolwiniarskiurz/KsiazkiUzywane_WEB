import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../shared/models/post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public phrase: string;

  public posts: Post[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phrase = params['phrase'];
    });

    const post = new Post();
    post.Id = 1;
    this.posts = [];
    this.posts.push(post);
  }

}
