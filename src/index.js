import { TodoList } from "./todo-list";
import { DOMController } from "./DOM-controller";
import "./style.css";

function main() {
    const todoList = new TodoList;
    
    todoList.createDefaultListTask("defaultTask1", "defaultTask1Description", new Date().toDateString());
    todoList.createDefaultListTask("defaultTask2", "defaultTask2Description", new Date().toDateString());
    todoList.createDefaultListTask("defaultTask3", "defaultTask3Description", new Date().toDateString());
    todoList.createDefaultListTask("defaultTask4", "defaultTask4Description", new Date().toDateString());
    todoList.createDefaultListTask("defaultTask5", "defaultTask5Description", new Date().toDateString());

    DOMController(todoList);
    console.log(todoList);
}

main();