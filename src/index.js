import { TodoList } from "./todo-list";
import { ListContent } from "./list-content";
import "./style.css";

const todoList = new TodoList;

todoList.createList("testList1");
todoList.createList("testList2");
todoList.createList("testList3");

todoList.createListTask("testList1", "testList1Title1", "testList1Description1", new Date().toDateString());
todoList.createListTask("testList1", "testList1Title2", "testList1Description2", new Date().toDateString());
todoList.createListTask("testList1", "testList1Title3", "testList1Description3", new Date().toDateString());

todoList.createListTask("testList2", "testList2Title1", "testList2Description1", new Date().toDateString());
todoList.createListTask("testList2", "testList2Title2", "testList2Description2", new Date().toDateString());
todoList.createListTask("testList2", "testList2Title3", "testList2Description3", new Date().toDateString());

todoList.createListTask("testList3", "testList3Title1", "testList3Description1", new Date().toDateString());
todoList.createListTask("testList3", "testList3Title2", "testList3Description2", new Date().toDateString());
todoList.createListTask("testList3", "testList3Title3", "testList3Description3", new Date().toDateString());

// task.getListTask("testList2", "testTitle1").updateTask("updatedTestTitle1", "updatedTestDescription1");
// task.deleteListTask("testList2", "testTitle2");

// console.log(task.getListTask("testList2", "testTitle1"));
// console.log(task.getList("testList2"));

ListContent(todoList);
console.log(todoList);