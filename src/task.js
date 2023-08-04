export class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.date = new Date().toDateString();
        this.complete = false;
    }

    markAsComplete() {
        this.complete = true;
    }

    updateTask(title, description) {
        this.title = title;
        this.description = description;
    }
}
