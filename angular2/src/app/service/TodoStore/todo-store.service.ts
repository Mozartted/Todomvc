import { Injectable } from '@angular/core';

import { Todo } from './service/todo';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoStoreService {
  todos:Array<Todo>;

  constructor(private http:Http) {
    let collectedTodos=

  }

}

@Injectable()
class api{
  todos:Array<Todo>;

  constructor(private http:Http) {
    let collectedTodos=http.get()

  }
}

@Injectable()
class api{
  todos:Array<Todo>;

  private http;

  constructor(private http:Http) {
    let collectedTodos=api.get('api/')
                        .toPromise()
                        .then(response => response.json().data as Todo[]);
    todos=collectedTodos;

  }

  api:http;


  add():Promise<Todo>{

  }

  delete(){

  }

  retrieve():Promise<Todo>{

  }

  allCompleted(){

  }

  getRemaining(){

  }

}
