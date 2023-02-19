import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from './../types/postState.interface';
import * as PostActions from './action';

export const initialState: PostStateInterface = {
  posts: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(PostActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
