import { PostInterface } from './../types/posts.interface';
import { createAction, props } from '@ngrx/store';

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts Success',
  props<{ posts: PostInterface[] }>()
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts Failure',
  props<{ error: string }>()
);
