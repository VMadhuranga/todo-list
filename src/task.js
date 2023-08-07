export class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
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
