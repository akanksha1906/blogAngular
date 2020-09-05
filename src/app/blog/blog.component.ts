import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../list';
import { Router, ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
 
  title='BLOG';
  blogList: any;
  selectedBlog: List;
  aList:List[]=[]; 
  temp : any;
  count : any;
   
  constructor(
    private userService: AuthenticationService,
    public router: Router
  ) { 
  }

  ngOnInit() {
    this.getBlog();
  }

  onSelect(list: List): void {
    this.selectedBlog = list;
  }
  
  delete(alist: List): void {
    this.blogList = this.blogList.filter(temp => temp !== alist);
    this.userService.deleteUser(alist).subscribe((res2) => {
      this.userService.count-- ;  //get Blog Count 
      this.userService.blogCount.next(this.userService.count)
      console.log(this.userService.count);
    }, err => {});
  }

  getBlog(): void {
    this.userService.getContent()
    .subscribe((res2) => {
      this.blogList=res2;
      this.userService.count=this.blogList.length;   //get Blog Count 
      this.userService.blogCount.next(this.userService.count)
      console.log(this.userService.count);
      console.log(res2);
    }, err => {});
  }

}
