import {Component} from '@angular/core';
import {PostService} from "../../shared/services/post.service";
import {Observable} from "rxjs";
import {PostModel} from "../../core/models/post.model";
import { RoutePaths } from 'src/app/app-routing.module';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable<PostModel[]>

  constructor(private post: PostService) {
    this.posts$ = post.getPosts();
  }

  public readonly RoutePaths = RoutePaths;
}
