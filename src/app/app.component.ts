import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  model: any = {};
  
  constructor(
    public router: Router ) {
  }

  ngOnInit() { 
  }
  
}
