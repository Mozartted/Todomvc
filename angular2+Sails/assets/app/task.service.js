"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var Rx_1 = require("rxjs/Rx");
var TaskService = (function () {
    function TaskService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = '';
        var tasks = http.get(this.baseUrl) //retrieving all todods
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
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
            .catch(function (err) { return Rx_1.Observable.throw(err.json().error || 'Server error'); });
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post("" + this.baseUrl, task)
            .map(function (res) {
            res.json();
        })
            .catch(function (err) { return Rx_1.Observable.throw(err.json().error || 'Server error'); });
    };
    TaskService.prototype.remove = function (task) {
        return this.http.delete("" + this.baseUrl + task.id)
            .map(function (res) {
            res.json();
        })
            .catch(function (err) { return Rx_1.Observable.throw(err.json().error || 'Server error'); });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map