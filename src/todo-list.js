import { Task } from "./task";

export class TodoList {

    list = JSON.parse(localStorage.getItem("todo.list")) || {};

    createList(listTitle) {
        this.list[listTitle] = [];
        localStorage.setItem("todo.list", JSON.stringify(this.list));
    }

    getList(listTitle) {
        return this.list[listTitle];
    }

    deleteList(listTitle) {
        delete this.list[listTitle];
        localStorage.setItem("todo.list", JSON.stringify(this.list));

    }

    createListTask(listTitle, taskDetail, taskDate) {
        this.getList(listTitle).push(new Task(taskDetail, taskDate));
        localStorage.setItem("todo.list", JSON.stringify(this.list));
    }

    getListTask(listTitle, taskDetail) {
        return this.getList(listTitle).find(task => task.taskDetail === taskDetail);
    }

    deleteListTask(listTitle, taskDetail) {
        this.getList(listTitle).splice(
            this.getList(listTitle).indexOf(this.getListTask(listTitle, taskDetail)), 1);
        localStorage.setItem("todo.list", JSON.stringify(this.list));

    }

    updateListTaskCompleteStatus(listTitle, taskDetail, status) {
        this.getListTask(listTitle, taskDetail).complete = status;
        localStorage.setItem("todo.list", JSON.stringify(this.list));

    }
}