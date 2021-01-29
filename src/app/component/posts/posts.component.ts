import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private activatedRouter: ActivatedRoute ) {
    console.log(this.activatedRouter.data.subscribe(value => this.posts = value.postsData ));
  }

  ngOnInit(): void {
  }

}
