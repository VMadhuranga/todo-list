import { TodoList } from "./todo-list";
import "./style.css";

function main() {
    const todoList = new TodoList;

    todoList.createDefaultListTask("defaultTask1", "defaultTask1Description", new Date().toDateString());
    todoList.createDefaultListTask("defaultTask2", "defaultTask2Description", new Date().toDateString());

    todoList.deleteDefaultListTask("defaultTask1");

    todoList.createList("list1");
    todoList.createList("list2");
    todoList.createList("list3");

    todoList.createListTask("list1", "list1Task1", "list1Task1Description", new Date().toDateString());
    todoList.createListTask("list1", "list1Task2", "list1Task2Description", new Date().toDateString());
    todoList.createListTask("list2", "list2Task1", "list2Task1Description", new Date().toDateString());
    todoList.createListTask("list2", "list2Task2", "list2Task2Description", new Date().toDateString());
    todoList.createListTask("list3", "list3Task1", "list3Task1Description", new Date().toDateString());
    todoList.createListTask("list3", "list3Task2", "list3Task2Description", new Date().toDateString());

    todoList.deleteList("list3");

    todoList.deleteListTask("list2", "list2Task2");

    console.log(todoList);
}

main();