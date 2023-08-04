import { TodoList } from "./todo-list";
import "./style.css";

const task = new TodoList;

task.createNewList("testList1");
task.createNewList("testList2");
task.createNewList("testList3");

task.createNewListTask("testList1", "testTitle1", "testDescription1");
task.createNewListTask("testList1", "testTitle2", "testDescription2");
task.createNewListTask("testList1", "testTitle3", "testDescription3");

task.createNewListTask("testList2", "testTitle1", "testDescription1");
task.createNewListTask("testList2", "testTitle2", "testDescription2");
task.createNewListTask("testList2", "testTitle3", "testDescription3");

task.createNewListTask("testList3", "testTitle1", "testDescription1");
task.createNewListTask("testList3", "testTitle2", "testDescription2");
task.createNewListTask("testList3", "testTitle3", "testDescription3");

task.renameList("testList1", "updatedTestList1");
task.renameList("testList2", "updatedTestList2");
task.renameList("testList3", "updatedTestList3");

// task.deleteList("updatedTestList1");
task.getListTask("updatedTestList2", "testTitle1").updateTask("updatedTestTitle1", "updatedTestDescription1");

console.log(task);