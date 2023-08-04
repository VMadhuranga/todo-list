import { TodoList } from "./todo-list";
import { ListContent } from "./list-content";
import "./style.css";

const task = new TodoList;
const {updateListContainer} = ListContent()

task.createList("testList1");
task.createList("testList2");
task.createList("testList3");

// task.createListTask("testList1", "testTitle1", "testDescription1");
// task.createListTask("testList1", "testTitle2", "testDescription2");
// task.createListTask("testList1", "testTitle3", "testDescription3");

// task.createListTask("testList2", "testTitle1", "testDescription1");
// task.createListTask("testList2", "testTitle2", "testDescription2");
// task.createListTask("testList2", "testTitle3", "testDescription3");

// task.createListTask("testList3", "testTitle1", "testDescription1");
// task.createListTask("testList3", "testTitle2", "testDescription2");
// task.createListTask("testList3", "testTitle3", "testDescription3");

// task.renameList("testList1", "updatedTestList1");
// task.renameList("testList2", "updatedTestList2");
// task.renameList("testList3", "updatedTestList3");

// task.getListTask("testList2", "testTitle1").updateTask("updatedTestTitle1", "updatedTestDescription1");
// task.deleteListTask("testList2", "testTitle2");

// task.deleteList("updatedTestList1");

// console.log(task.getListTask("testList2", "testTitle1"));
// console.log(task.getList("testList2"));
renderListContainer(task.todoList);
console.log(task);