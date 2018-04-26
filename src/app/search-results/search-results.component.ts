import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../shared/models/post';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public phrase: string;

  public posts: Post[] = [];

  public page = 1;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phrase = params['phrase'];
        this.search();
    });

  }


  goToFullPost(id: number) {
    this.router.navigate([`/post/${id}`]);
  }

  public search() {
    this.api.search(this.phrase, this.page).subscribe(ok => {
      this.posts = ok;
      console.log(this.posts);
    });
  }
}
