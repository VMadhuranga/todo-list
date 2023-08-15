export function DOMController(todoList) {
    const taskContent = document.querySelector(".task-content");
    const taskContainer = document.querySelector(".task-container");
    const listContainer = document.querySelector(".list-container");
    const addListInput = document.querySelector(".add-list-input");
    const addListButton = document.querySelector(".add-list-button");
    const listTitle = document.querySelector(".list-title");
    const addTaskButton = document.querySelector(".add-task-button");
    const addTaskInput = document.querySelector(".add-task-input");
    const addTaskDate = document.querySelector(".add-task-date");

    updateListContainer();
    addList();
    deleteList()
    showTaskContent();
    addTask();
    deleteTask();
    setTaskStatus();

    function addList() {
        addListButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (!addListInput.value) {
                alert("Please provide a list name");
            } else if (todoList.getList(addListInput.value)) {
                alert("List already exist");
                addListInput.value = null;
            } else {
                todoList.createList(addListInput.value);
                addListInput.value = null;
                updateListContainer();
            }
        });
    }

    function deleteList() {
        listContainer.addEventListener("click", (e) => {
            if (e.target.className === "delete-list") {
                todoList.deleteList(e.target.previousSibling.textContent);
                console.log(todoList);
                taskContent.setAttribute("hidden", "");
                updateListContainer();
            }
        });
    }

    function updateListContainer() {
        listContainer.replaceChildren();

        for (let i in todoList.list) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-item");

            const deleteListItem = document.createElement("button");
            deleteListItem.classList.add("delete-list");
            deleteListItem.textContent = "\u2A09";

            listItem.textContent = i;
            listItem.appendChild(deleteListItem);
            listContainer.appendChild(listItem);
        }
    }

    function showTaskContent() {
        listContainer.addEventListener("click", (e) => {
            if (e.target.className === "list-item") {
                taskContent.removeAttribute("hidden");
                listTitle.textContent = e.target.firstChild.textContent
                updateTaskContainer(listTitle.textContent);
            }
        });
    }

    function updateTaskContainer(item) {
        taskContainer.replaceChildren();

        for (let i = 0; i < todoList.getList(item).length; i++) {
            const task = document.createElement("div");
            task.classList.add("task");

            const taskComplete = document.createElement("input");
            taskComplete.setAttribute("type", "checkbox");
            taskComplete.setAttribute("id", "task-status");

            const taskDetail = document.createElement("p");
            taskDetail.textContent = todoList.getList(item)[i].taskDetail;
            taskDetail.classList.add("task-detail");

            const taskDate = document.createElement("p");
            taskDate.textContent = `Due Date: ${todoList.getList(item)[i].taskDate}`;
            // taskDate.classList.add("task-date");

            const deleteTask = document.createElement("button");
            deleteTask.classList.add("delete-task");
            deleteTask.textContent = "\u2A09";

            if (todoList.getList(item)[i].complete) {
                taskComplete.setAttribute("checked", "");
                taskDetail.classList.add("strike-through");
            } else {
                taskComplete.removeAttribute("checked", "");
                taskDetail.classList.remove("strike-through");
            }

            task.appendChild(taskComplete);
            task.appendChild(taskDetail);
            task.appendChild(taskDate);
            task.appendChild(deleteTask);

            taskContainer.appendChild(task);
        }
    }

    function addTask() {
        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (!(addTaskInput.value && addTaskDate.valueAsNumber)) {
                alert("Please provide a task detail and due date");
            } else {
                todoList.createListTask(listTitle.textContent, addTaskInput.value, addTaskDate.valueAsNumber);
                addTaskInput.value = null;
                addTaskDate.value = null;
                updateTaskContainer(listTitle.textContent);
            }
        });
    }

    function deleteTask() {
        taskContainer.addEventListener("click", (e) => {
            if (e.target.className === "delete-task") {
                console.log(e.target.parentElement.children[1].textContent);
                todoList.deleteListTask(
                    listTitle.textContent,
                    e.target.parentElement.children[1].textContent
                );
                updateTaskContainer(listTitle.textContent);
            }
        });
    }

    function setTaskStatus() {
        taskContainer.addEventListener("click", (e) => {
            if (e.target.id === "task-status") {
                if (e.target.checked) {
                    todoList.updateListTaskCompleteStatus(
                        listTitle.textContent,
                        e.target.nextElementSibling.textContent,
                        e.target.checked
                    );
                    updateTaskContainer(listTitle.textContent);
                } else {
                    todoList.updateListTaskCompleteStatus(
                        listTitle.textContent,
                        e.target.nextElementSibling.textContent,
                        e.target.checked
                    );
                    updateTaskContainer(listTitle.textContent);
                }
            }
        });
    }
}