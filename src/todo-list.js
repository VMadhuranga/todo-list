import { Task } from "./task";

export class TodoList {

    todoList = [];

    createNewList(listName) {
        this.todoList.push({[listName]: []});
    }

    createNewListTask(listName, title, description) {
        return this.todoList.find((list) => list[listName]
        .push(new Task(title, description)));
    }
}
