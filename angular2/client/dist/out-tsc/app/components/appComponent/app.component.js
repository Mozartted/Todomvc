var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Todo } from '../../service/todo';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.contructor = function (todoStore) {
        this.todoStore = todoStore;
    };
    AppComponent.prototype.addTodo = function () {
        this.todo = new Todo(this.newTodoText);
        this.todoStore.add(this.todo);
    };
    AppComponent.prototype.stopEditing = function (todo, editedTitle) {
        todo.title = editedTitle;
        todo.editing = false;
    };
    AppComponent.prototype.cancelEditingTodo = function (todo) {
        todo.editing = false;
    };
    AppComponent.prototype.updateEditingTodo = function (todo, editedTitle) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        if (editedTitle.length === 0) {
            return this.todoStore.delete(todo);
        }
        todo.title = editedTitle;
    };
    AppComponent.prototype.removeCompleted = function (todo) {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './components/appComponent/app.component.html',
        styleUrls: ['./components/appComponent/app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../../../src/app/components/appComponent/app.component.js.map