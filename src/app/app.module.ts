import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import {PostResolveService} from './services/post-resolve.service';
import { FullPostComponent } from './component/full-post/full-post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children:[{
    path: ':id', component: FullPostComponent
    }]}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
