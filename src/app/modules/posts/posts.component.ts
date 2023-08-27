import {Component, OnDestroy} from '@angular/core';
import {PostService} from "../../shared/services/post.service";
import {filter, Observable, Subject, takeUntil, tap} from "rxjs";
import {PostModel} from "../../core/models/post.model";
import { RoutePaths } from 'src/app/app-routing.module';
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnDestroy {
  posts$: Observable<PostModel[]>
  gotPosts = false;
  pageIndex = 0;
  pageSize = 10
  private destroy$ = new Subject<void>();

  constructor(
    post: PostService,
    route: ActivatedRoute,
    private router: Router,
    ) {
    this.posts$ = post.getPosts().pipe(tap(() => this.gotPosts = true));
    route.queryParamMap
      .pipe(
        takeUntil(this.destroy$),
        filter(queryParams => !Number.isNaN(queryParams.get('page')))
      )
      .subscribe(queryParams => this.pageIndex = +queryParams.get('page')!)
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  handlePageChange(ev: PageEvent) {
    console.log(ev.pageIndex)
    this.router.navigate([RoutePaths.POSTS], {queryParams: {page: ev.pageIndex}});
  }

  public readonly RoutePaths = RoutePaths;
}
