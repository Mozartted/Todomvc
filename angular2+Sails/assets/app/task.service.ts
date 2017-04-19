import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Task} from './task';


@Injectable()
export class TaskService{

    public tasks:Task;
    private baseUrl = '';
    constructor(private http:Http){
        let tasks=http.get(this.baseUrl) //retrieving all todods
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));

        tasks.subscribe(
            tasks => this.tasks = tasks, //Bind to view
            err => {
            console.log(err);
        });
    }

    updateTask(task:Task):Observable<Task[]>{
      // take the task variable and update it with the request
      return this.http.post(`${this.baseUrl}${task.id}`,task)
                  .map((res:Response)=>{
                      res.json()
                  })
                  .catch((err:any)=>Observable.throw(err.json().error || 'Server error'));
    }

    addTask(task:Task):Observable<Task[]>{
      return this.http.post(`${this.baseUrl}`,task)
                  .map((res:Response)=>{
                      res.json()
                  })
                  .catch((err:any)=>Observable.throw(err.json().error || 'Server error'));

    }

    remove(task:Task):Observable<Task[]>{
      return this.http.delete(`${this.baseUrl}${task.id}`)
                  .map((res:Response)=>{
                      res.json()
                  })
                  .catch((err:any)=>Observable.throw(err.json().error || 'Server error'));

    }
}
