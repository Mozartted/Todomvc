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
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var task_1 = require("./task");
var AppComponent = (function () {
    function AppComponent(taskStore) {
        // create a list of tasks
        this.taskStore = taskStore;
    }
    AppComponent.prototype.addTask = function () {
        // adding the new task
        var task = new task_1.Task(this.todoText);
        this.taskStore.addTask(task);
    };
    AppComponent.prototype.removeTask = function (task) {
        // remove the given task
        this.taskStore.remove(task);
    };
    AppComponent.prototype.editTask = function (task, editedTask) {
        // edit the given task
        // check that editedTask equal actual values
        if (editedTask !== null || editedTask !== '') {
            task.tasks = editedTask;
            this.taskStore.updateTask(task);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map