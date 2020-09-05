import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { users } from './users';
import {List} from './list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
 
  private heroUrl = 'api/hero';  // URL to web api
  private listUrl = 'api/myList';
  currentCnt = 0;
  count : any;
  counter = 1;
  blogCount: BehaviorSubject<number>;
  private subject = new Subject<number>();
  
  constructor(private http: HttpClient) {
    this.blogCount = new BehaviorSubject(0);
  }
  
  getHero()
  {
    let url='api/hero';
    return this.http.get(url);
  };

  getContent()
  {
    let url2='api/myList';
    return this.http.get(url2);
  };

  getBlogCount()
  {
   this.count = this.listUrl.length;
    console.log(this.count);
    return this.count;
  }
  
  /** POST: add a new User to the server */
  addUser (user: users): Observable<users> {
    return this.http.post<users>(this.heroUrl, user, httpOptions).pipe(
      tap((users: users) => this.log(`added hero w/ id=${user.email,user.password}`)),
      catchError(this.handleError<users>('addUser'))
    );
  };

 /** POST: add a new List to the server */
  addList (user: List): Observable<List> {
    return this.http.post<List>(this.listUrl, user, httpOptions).pipe(
      tap((user: List) => this.log(`added blog w/ id=${user.id}`)),
      catchError(this.handleError<List>('addList'))
    );
  };
 
  getId(id: number): Observable<List> {
    const url = `${this.listUrl}/${id}`;
    return this.http.get<List>(url).pipe(
      tap(_ => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<List>(`getUser id=${id}`))
    );
  }

  updateUser (list: List): Observable<List> {
    console.log(List)
    console.log('id')
    return this.http.put(this.listUrl, list, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${list.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteUser (list: List | number): Observable<List> {
    const id = typeof list === 'number' ? list : list.id;
    const url = `${this.listUrl}/${id}`;
    return this.http.delete<List>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<List>('deleteUser'))
    )
  }

  // Likes: for likes on the particular blog
  likes (list: List | number): Observable<List> {
    const id = typeof list === 'number' ? list : list.id;
    const url = `${this.listUrl}/${id}`;
    return this.http.post<List>(url, httpOptions).pipe(
      tap(_ => {
        this.log(`Liked user id=${id}`);
      }),
      catchError(this.handleError<List>('likes'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message)
  }

}
