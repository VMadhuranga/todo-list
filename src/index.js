import { TodoList } from "./todo-list";
import { ListContent } from "./list-content";
import "./style.css";

const todoList = new TodoList;

todoList.createList("testList1");
todoList.createList("testList2");
todoList.createList("testList3");

todoList.createListTask("testList1", "testTitle1", "testDescription1");
todoList.createListTask("testList1", "testTitle2", "testDescription2");
todoList.createListTask("testList1", "testTitle3", "testDescription3");

todoList.createListTask("testList2", "testTitle1", "testDescription1");
todoList.createListTask("testList2", "testTitle2", "testDescription2");
todoList.createListTask("testList2", "testTitle3", "testDescription3");

todoList.createListTask("testList3", "testTitle1", "testDescription1");
todoList.createListTask("testList3", "testTitle2", "testDescription2");
todoList.createListTask("testList3", "testTitle3", "testDescription3");

// task.getListTask("testList2", "testTitle1").updateTask("updatedTestTitle1", "updatedTestDescription1");
// task.deleteListTask("testList2", "testTitle2");

// console.log(task.getListTask("testList2", "testTitle1"));
// console.log(task.getList("testList2"));

ListContent(todoList);
console.log(todoList);