import { Task } from "./task";

export class TodoList {

    todoList = [];

    createNewList(listName) {
        this.todoList.push({[listName]: []});
    }

    createNewListTask(listName, title, description) {
        this.todoList.find((list) => {
            if (list[listName]) {
                list[listName].push(new Task(title, description));
            }
        });
    }

    updateList(oldListName, newListName) {
        this.todoList.find((item) => {
            if (item[oldListName]) {
                item[newListName] = item[oldListName];
                delete item[oldListName];
            }
        });
    }
}
