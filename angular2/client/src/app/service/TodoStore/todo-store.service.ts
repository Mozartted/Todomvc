import { Injectable } from '@angular/core';

import { Todo } from '../todo';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoStoreService {


  //am not really sure but I feel this is where the cool data would go.
  public todos:Array<Todo>;
  private baseUrl='http://localhost:3000/api/';

  constructor(private http:Http) {
    //the constructor is expected to collect the todos from the Server
    let todos=http.get(this.baseUrl)    //retrieving all todods
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));

          
}

  add(todo:Object):Observable<Todo[]>{
    let todoString=JSON.stringify(todo); //creating String payload
    let headers = new Headers({'Content-Type':'application/json'}); //set content type to json
    let options = new RequestOptions({headers: headers}); //creates a request option

    return this.http.post(this.baseUrl,todo,options)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  delete(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  retrieve():Observable<Todo[]>{
    return this.http.get(this.baseUrl)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Serve error'));
  }

  getCompleted(){
    this.todos.filter((todo:Todo)=> todo.completed == true);
  }

  removeCompleted(){
    
  }

}
