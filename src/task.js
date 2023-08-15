import { format } from "date-fns";

export class Task {
    constructor(taskDetail, taskDate) {
        this.taskDetail = taskDetail;
        this.taskDate = format(taskDate, 'EEE MMM dd yyyy');
        this.complete = false;
    }
}