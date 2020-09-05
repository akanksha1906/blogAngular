import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../list';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  blogList: any;
  selectedBlog: List;
  aList:List[]=[]; 
  temp : any;
  model: any = {};
  userList:any;
   
  constructor(
    private userService: AuthenticationService,
    private userServiceBlog: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getBlog();
    this.getUsers();
  }

  getBlog(): void {
    this.userService.getContent()
    .subscribe((res2) => {
      this.blogList=res2 ;
      console.log(res2);
    }, err => {});
  }
  delete(alist: List): void {
    this.blogList = this.blogList.filter(temp => temp !== alist);
    this.userService.deleteUser(alist).subscribe();
  }

  getUsers(): void {
    this.userServiceBlog.getHero()
    .subscribe((res) => {
    this.userList=res;
    console.log(res);
    }, err => {
    });
  }

}