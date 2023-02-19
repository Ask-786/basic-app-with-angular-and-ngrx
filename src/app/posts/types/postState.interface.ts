import { PostInterface } from './posts.interface';
export interface PostStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
