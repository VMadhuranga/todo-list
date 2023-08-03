import { TodoList } from "./todo-list";

const task = new TodoList;

task.createNewList("testList1");
task.createNewList("testList2");
task.createNewList("testList3");
task.createNewList("testList4");

task.createNewListTask("testList1", "testTitle3", "testDescription3");
task.createNewListTask("testList1", "testTitle3", "testDescription3");
task.createNewListTask("testList1", "testTitle3", "testDescription3");

console.log(task);