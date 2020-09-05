import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../user.service';
import { RouterModule, Routes, Router } from '@angular/router';
import {InMemoryDataService} from '../InMemoryDataService.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
 
  private gender: string[];
  user: users[]=[]; //Property for the user

  constructor(
    private http: HttpClient,
    private userService: AuthenticationService,
    public router: Router,
    public hero: InMemoryDataService ) { 
  }
 
  ngOnInit() {
   this.gender =  [ 'Male', 'Female', 'Others' ];
  }

  register( email: string, password:string ): void {
    if ( !email ) { 
      alert( 'Email Cannot be empty' )
      return; 
    }  
    if ( !password ) { 
      alert( 'Password Cannot be empty' )
      return; 
    }
    this.userService.addUser ({ email,password } as users)
    .subscribe( userResult => {  
      this.user.push( userResult )
      alert( 'Registration Successful' )
      this.router.navigate([ 'login' ]);
    });
  }

  public onFormSubmit({ value, valid }: { value: users, valid: boolean }) {
    console.log( this.user);
    console.log( "valid: " + valid );
  }

}
