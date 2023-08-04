import { Task } from "./task";

export class TodoList {

    todoList = [];

    createNewList(listName) {
        this.todoList.push({[listName]: []});
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

    createNewListTask(listName, title, description) {
        this.todoList.find((list) => {
            if (list[listName]) {
                list[listName].push(new Task(title, description));
            }
        });
    }

    getListTask(listName, taskTitle) {
        const taskList = this.todoList.find((list) => list[listName])[listName];
        return taskList.find(element => element["title"] === taskTitle);
    }
}