import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postsService: PostService) { }
  resolve(): Observable<Post[]> | Promise<Post[]> | Post[]{
    return this.postsService.getPosts();
  }
}
