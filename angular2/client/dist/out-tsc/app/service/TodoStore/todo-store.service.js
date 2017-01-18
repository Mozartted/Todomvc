var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var TodoStoreService = (function () {
    function TodoStoreService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/';
    }
    TodoStoreService.prototype.add = function (todo) {
        var todoString = JSON.stringify(todo);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, todo, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    TodoStoreService.prototype.delete = function () {
    };
    TodoStoreService.prototype.retrieve = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Serve error'); });
    };
    return TodoStoreService;
}());
TodoStoreService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TodoStoreService);
export { TodoStoreService };
//# sourceMappingURL=../../../../../src/app/service/TodoStore/todo-store.service.js.map