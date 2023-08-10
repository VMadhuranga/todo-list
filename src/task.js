export class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.complete = false;
    }

    taskComplete() {
        this.complete = this.complete === false ? true : false;
    }

    updateTask(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
}