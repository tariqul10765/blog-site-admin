import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-approved-post',
  templateUrl: './approved-post.component.html',
  styleUrls: ['./approved-post.component.scss']
})
export class ApprovedPostComponent implements OnInit {

  panelOpenState = true;
  posts: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getQueueData()
      .subscribe((post) => {
        this.posts = post;
        // console.log(this.posts);
      });
    
  }

}
