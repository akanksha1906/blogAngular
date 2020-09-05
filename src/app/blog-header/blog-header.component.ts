import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../user.service';


@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})

export class BlogHeaderComponent implements OnInit {

  blogList : any;
  num : any;
  constructor(
    private userService: AuthenticationService
  ) { }

  ngOnInit() {
    this.userService.blogCount.subscribe(
      res => {
      this.num = res;
    })
  }
}
