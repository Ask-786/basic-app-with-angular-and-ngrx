import { Observable } from 'rxjs';
import { isLoadingSelector } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PostsActions from '../../store/action';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
