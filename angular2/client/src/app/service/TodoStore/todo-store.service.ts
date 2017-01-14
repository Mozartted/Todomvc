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

  todos:Array<Todo>;
  baseUrl='http://localhost:3000/api/';
  //am not really sure but I feel this is where the cool data would go.

  constructor(private http:Http) {}

  api=this.http;

  add(todo:Todo):Observable<Todo[]>{

  }

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
