import { Injectable } from '@angular/core';

import { Todo } from './service/todo';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoStoreService {


  //am not really sure but I feel this is where the cool data would go.

  constructor(private http:Http,) {}
  public todos:Array<Todo>;
  public baseUrl='http://localhost:3000/api/';

  add(todo:Object):Observable<Todo[]>{
    let todoString=JSON.stringify(todo); //creating String payload
    let headers = new Headers({'Content-Type':'application/json'}); //set content type to json
    let options = new RequestOptions({headers: headers}); //creates a request option

    return this.http.post(baseurl,todo,options)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  // addComment (body: Object): Observable<Comment[]> {
  //     let bodyString = JSON.stringify(body); // Stringify payload
  //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //     let options = new RequestOptions({ headers: headers }); // Create a request option
  //
  //     return this.http.post(this.commentsUrl, body, options) // ...using post request
  //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
  //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  // }

  delete(){

  }

  retrieve():Observable<Todo[]>{
    return api.get(baseUrl)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Serve error'));
  }

  // allCompleted(){
  //
  // }

  // getRemaining(){
  //
  // }

}
