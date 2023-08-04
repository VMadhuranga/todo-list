import { Task } from "./task";

export class TodoList {

    list = [];

    createList(listName) {
        this.list.push({[listName]: []});
    }

    getList(listName) {
        return this.list.find(item => item[listName])[listName];
    }

    renameList(oldListName, newListName) {
        this.list.find((item) => {
            if (item[oldListName]) {
                item[newListName] = item[oldListName];
                delete item[oldListName];
            }
        });
    }

    deleteList(listName) {
        this.list.splice(this.list.findIndex((item) => item[listName]), 1);
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