import { PostsEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { reducer } from './store/reducer';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsModule {}
