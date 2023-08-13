export class Task {
    constructor(taskDetail, taskDate) {
        this.taskDetail = taskDetail;
        this.taskDate = taskDate;
        this.complete = false;
    }

    taskComplete() {
        this.complete = this.complete === false ? true : false;
    }
}