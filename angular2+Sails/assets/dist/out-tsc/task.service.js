var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
var TaskService = (function () {
    function TaskService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = '';
        var tasks = http.get(this.baseUrl) //retrieving all todods
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
        tasks.subscribe(function (tasks) { return _this.tasks = tasks; }, //Bind to view
        function (//Bind to view
            err) {
            console.log(err);
        });
    }
    TaskService.prototype.updateTask = function (task) {
        // take the task variable and update it with the request
        return this.http.post("" + this.baseUrl + task.id, task)
            .map(function (res) {
            res.json();
        })
            .catch(function (err) { return Observable.throw(err.json().error || 'Server error'); });
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post("" + this.baseUrl, task)
            .map(function (res) {
            res.json();
        })
            .catch(function (err) { return Observable.throw(err.json().error || 'Server error'); });
    };
    TaskService.prototype.remove = function (task) {
        return this.http.delete("" + this.baseUrl + task.id)
            .map(function (res) {
            res.json();
        })
            .catch(function (err) { return Observable.throw(err.json().error || 'Server error'); });
    };
    return TaskService;
}());
TaskService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TaskService);
export { TaskService };
//# sourceMappingURL=/home/mozartted/PROJECTS/javascript/Todomvc/angular2+Sails/task.service.js.map