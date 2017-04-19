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
export { Task };
//# sourceMappingURL=/home/mozartted/PROJECTS/javascript/Todomvc/angular2+Sails/task.js.map