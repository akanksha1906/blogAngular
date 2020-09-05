import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model : any = {};
  userList : any;
      
  constructor(private http: HttpClient,
    private userServiceBlog: AuthenticationService,
    private route: ActivatedRoute, 
    public router: Router ) {
  }         
  
  ngOnInit() {
    this.getUsers();
  }
     
  getUsers(): void {
    this.userServiceBlog.getHero()
    .subscribe((res) => {
    this.userList=res;
    console.log(res);
    }, err => {
    });
  }

  compare() {
    for(var i = 0; i < this.userList.length ; i++){
      if (this.model.email === this.userList[i].email && this.model.password=== this.userList[i].password) {
        alert('LOGIN SUCCESSFUL')
        this.router.navigate(['blog']);
        break;
      }else{
        continue;
        //alert('InCorrect UserName or Password')
      }
    }    
  }
    
  onSubmit() {
    this.compare();
  }  
   
}
