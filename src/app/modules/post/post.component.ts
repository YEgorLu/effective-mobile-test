import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, Subject, switchMap, takeUntil} from "rxjs";
import {PostModel} from "../../core/models/post.model";
import {PostService} from "../../shared/services/post.service";
import {RoutePaths} from "../../app-routing.module";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnDestroy, OnInit {
  private destroy$ = new Subject<void>();
  postData!: PostModel;

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        filter(params => params.has('id')),
        switchMap(params => this.post.getPost(params.get('id')!))
        )
      .subscribe(postData => this.postData = postData);
  }

  constructor(
    private route: ActivatedRoute,
    private post: PostService,
    ) {

  }

  public readonly RoutePaths = RoutePaths;
}
