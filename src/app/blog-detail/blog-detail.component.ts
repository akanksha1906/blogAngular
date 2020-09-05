import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';
import { AuthenticationService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  @Input() list:List;
  
  blogList: any;
  selectedBlog: List;
  userId:any;
  toggle = true;
  status = 'Like'; 
  str: string[]= [];
  userComment: string;

  constructor(
    private userService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.getBlogList();
    this.userId= this.route.snapshot.paramMap.get("id")
    console.log(this.userId)
    this.getBlog()
  }

  likeRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Like' : 'Liked :)';
  }

  comment() {
    this.str.push(this.userComment)
    console.log( "TextAreaComponent::str: " + this.str);
  }

  onSelect(blog: List): void {
    this.selectedBlog = blog;
    this.blogList= this.route.snapshot.paramMap.get("id")
  }

  getBlogList(): void {
    this.userService.getContent()
    .subscribe((res2) => {
      this.blogList=res2 ;
      console.log(res2);
      }, err => {
    });
  }

  getBlog(): void {
    this.userService.getId(this.userId)
    .subscribe(list => { console.log(list)
      this.blogList = list
    });
    console.log('List')
  }

  save(): void { console.log(this.list)
    this.userService.updateUser(this.blogList )
    .subscribe(() =>this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}
