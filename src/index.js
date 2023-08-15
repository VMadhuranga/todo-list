import { TodoList } from "./todo-list";
import { DOMController } from "./DOM-controller";
import "./style.css";

function main() {
    const todoList = new TodoList;

    DOMController(todoList);
}

main();