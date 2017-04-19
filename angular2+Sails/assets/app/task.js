"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(title) {
    }
    Object.defineProperty(Task.prototype, "tasks", {
        get: function () {
            return this.task;
        },
        set: function (value) {
            this.task = value.trim();
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map