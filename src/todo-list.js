import { Task } from "./task";

export class TodoList {

    todoList = [];

    createList(listName) {
        this.todoList.push({[listName]: []});
    }

    getList(listName) {
        return this.todoList.find(item => item[listName])[listName];
    }

    renameList(oldListName, newListName) {
        this.todoList.find((item) => {
            if (item[oldListName]) {
                item[newListName] = item[oldListName];
                delete item[oldListName];
            }
        });
    }

    deleteList(listName) {
        this.todoList.splice(this.todoList.findIndex((item) => item[listName]), 1);
    }

    createListTask(listName, title, description) {
        if (this.getList(listName)) {
            this.getList(listName).push(new Task(title, description));
        }
    }

    getListTask(listName, taskTitle) {
        return this.getList(listName).find(element => element["title"] === taskTitle);
    }

    deleteListTask(listName, taskTitle) {
        this.getList(listName).splice(
            this.getList(listName).findIndex(item => item === this.getListTask(listName, taskTitle)), 1
        );
    }
}