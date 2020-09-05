import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogList: any;
  aList:List[]=[]; 

  constructor(
    private userService: AuthenticationService,
    public router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  add(name: string, content: string ): void {
    name = name.trim();
    content = content.trim();
    if (!name) {
      alert('Name cannot be empty')
      return;   
    }
    if (!content) {
      alert('Content cannot be empty')
      return; 
    }
    this.userService.addList({ name,content } as List)
    .subscribe(addResult => {
      this.userService.count++   //get Blog Count 
      this.userService.blogCount.next(this.userService.count)
      console.log(this.userService.count);
      //this.blogList.push(addResult);
      alert('User Added Successfully')
      this.goBack()
    });
  }
  
  goBack(): void {
    this.location.back();
  }  

}
