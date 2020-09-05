import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from './InMemoryDataService.service';
import { AppRoutingModule } from './app-routing.module';
import { users } from './users';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'blog',component: BlogComponent,data: { title: 'Blog Details' }},
  { path: 'login',component: LoginComponent },
  { path: 'signup',component: SignupComponent },
  { path: 'blog-detail/:id',component: BlogDetailComponent },
  { path: 'add-blog',component: AddBlogComponent },
  { path: 'admin', loadChildren: './admin.module#AdminModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  
  exports: [RouterModule],

  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    SignupComponent,
    BlogDetailComponent,
    BlogHeaderComponent,
    AddBlogComponent
  ],

  providers: [
    InMemoryDataService,
    users
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
