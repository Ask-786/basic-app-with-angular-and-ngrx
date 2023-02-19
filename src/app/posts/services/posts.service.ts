import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../types/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts(): Observable<PostInterface[]> {
    const posts = [
      { id: 1, title: 'first post' },
      { id: 2, title: 'second post' },
      { id: 3, title: 'third post' },
    ];

    return of(posts).pipe(delay(2000));
  }
}
