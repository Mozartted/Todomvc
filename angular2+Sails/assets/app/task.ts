export class Task{

	private id: String;
    private task: String;
	get tasks() {
		return this.task;
	}

	set tasks(value: String) {
		this.task = value.trim();
	}

	constructor(title: String) {

	}
}

