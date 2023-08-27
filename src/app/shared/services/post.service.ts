import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,tap, concat, map, filter} from "rxjs";
import {PostModel} from "../../core/models/post.model";
import {LocalStorageService} from "../../core/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  private lsPosts$ = new Observable<PostModel[]>((subscriber) => {
    const cachedPosts = this.ls.get('posts');
    if (cachedPosts) subscriber.next(cachedPosts);
    subscriber.complete();
  })

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
    ) { }

  getPosts(): Observable<PostModel[]> {
    const fetched$ = this.http.get<PostModel[]>(`${this.baseUrl}posts`)
      .pipe(
        tap((posts) => this.ls.set('posts', posts))
      )

    return concat(
      this.lsPosts$,
      fetched$)
  }

  getPost(id: number | string): Observable<PostModel> {
    const fetched$ = this.http.get<PostModel>(`${this.baseUrl}posts/${id}`);
    const lsPost$: Observable<PostModel> = this.lsPosts$
      .pipe(
        map(posts => posts.find(post => post.id === id)),
        filter((post): post is PostModel => !!post)
      );

    return concat(
      lsPost$,
      fetched$,
    )
  }
}
