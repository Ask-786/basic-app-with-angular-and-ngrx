import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule],
})

export class PostsModule {}
