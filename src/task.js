export class Task {
    constructor(taskDetail, taskDate) {
        this.taskDetail = taskDetail;
        this.taskDate = taskDate;
        this.complete = false;
    }

    taskComplete(status) {
        this.complete = status;
    }
}