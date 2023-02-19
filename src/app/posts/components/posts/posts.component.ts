import { Observable } from 'rxjs';
import {
  isLoadingSelector,
  postsSelector,
  errorSelector,
} from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PostsActions from '../../store/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { PostInterface } from '../../types/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<PostInterface[]>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
