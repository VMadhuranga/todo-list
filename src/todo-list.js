import { Task } from "./task";

export class TodoList {

    list = {};

    createList(listTitle) {
        this.list[listTitle] = [];
    }

    getList(listTitle) {
        return this.list[listTitle];
    }

    deleteList(listTitle) {
        delete this.list[listTitle];
    }

    createListTask(listTitle, taskDetail, taskDate) {
        this.getList(listTitle).push(new Task(taskDetail, taskDate));
    }

    getListTask(listTitle, taskDetail) {
        return this.getList(listTitle).find(task => task.taskDetail === taskDetail);
    }

    deleteListTask(listTitle, taskDetail) {
        this.getList(listTitle).splice(
            this.getList(listTitle).indexOf(this.getListTask(listTitle, taskDetail)), 1);
    }

    updateListTaskCompleteStatus(listTitle, taskDetail, status) {
        // this taskComplete method is from class Task
        this.getListTask(listTitle, taskDetail).taskComplete(status);
    }
}