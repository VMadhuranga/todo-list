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

    getDefaultListTask(taskTitle) {
         return this.list.default.find(task => task.title === taskTitle);
    }

    deleteDefaultListTask(taskTitle) {
        this.list.default.splice(this.list.default.indexOf(this.getDefaultListTask(taskTitle)), 1);
    }

    updateDefaultListTask(taskTitle, newTaskTitle, newTaskDescription, newDate) {
        // this updateTask method is from class Task
        this.getDefaultListTask(taskTitle).updateTask(newTaskTitle, newTaskDescription, newDate);
    }

    updateDefaultListTaskCompleteStatus(taskTitle) {
        // this taskComplete method is from class Task
        this.getDefaultListTask(taskTitle).taskComplete();
    }

    createListTask(listTitle, taskTitle, taskDescription, taskDate) {
        this.getList(listTitle).push(new Task(taskTitle, taskDescription, taskDate));
    }

    getListTask(listTitle, taskTitle) {
        return this.getList(listTitle).find(task => task.title === taskTitle);
    }

    deleteListTask(listTitle, taskTitle) {
        this.getList(listTitle).splice(
            this.getList(listTitle).indexOf(this.getListTask(listTitle, taskTitle)), 1);
    }

    updateListTask(listTitle, taskTitle, newTaskTitle, newTaskDescription, newDate) {
        // this updateTask method is from class Task
        (this.getListTask(listTitle, taskTitle).updateTask(newTaskTitle, newTaskDescription, newDate));
    }

    updateListTaskCompleteStatus(listTitle, taskTitle) {
        // this taskComplete method is from class Task
        this.getListTask(listTitle, taskTitle).taskComplete();
    }
}