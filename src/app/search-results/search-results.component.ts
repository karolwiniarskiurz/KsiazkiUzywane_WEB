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

  public currentPage = 1;

  public totalPages;

  public itemsPerPage;

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
    this.api.search(this.phrase, this.currentPage).subscribe(ok => {
      this.posts = ok['posts'];
      this.currentPage = ok['currentPage'];
      this.itemsPerPage = ok['itemsPerPage'];
      this.totalPages = ok['totalPages'];
    });
  }
}
