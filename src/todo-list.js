import { Task } from "./task";

export class TodoList {

    list = {
        default: []
    };

    createList(listTitle) {
        this.list[listTitle] = [];
    }

    getList(listTitle) {
        return this.list[listTitle];
    }

    deleteList(listTitle) {
        delete this.list[listTitle];
    }

    createDefaultListTask(taskTitle, taskDescription, taskDate) {
        this.list.default.push(new Task(taskTitle, taskDescription, taskDate));
    }

    deleteDefaultListTask(taskTitle) {
        this.list.default.splice(this.list.default.findIndex(task => task.title === taskTitle), 1);
    }

    createListTask(listTitle, taskTitle, taskDescription, taskDate) {
        this.getList(listTitle).push(new Task(taskTitle, taskDescription, taskDate));
    }

    getListTask(listTitle, taskTitle) {
        return this.getList(listTitle).find(task => task.title === taskTitle);
    }

    deleteListTask(listTitle, taskTitle) {
        this.getList(listTitle).splice(
            this.getList(listTitle).findIndex(task => task === this.getListTask(listTitle, taskTitle)), 1);
    }
}