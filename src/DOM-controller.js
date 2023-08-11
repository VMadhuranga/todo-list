export function DOMController(todoList) {
    const defaultList = document.querySelector(".default-list");
    const taskContainer = document.querySelector(".task-container");
    const listTitle = document.querySelector(".list-title");
    const addTaskModal = document.querySelector(".add-task-modal");
    const addTaskTitle = document.querySelector("#add-task-title");
    const addTaskDescription = document.querySelector("#add-task-description");
    const addTaskDate = document.querySelector("#add-task-date");
    const submitTask = document.querySelector("#submit-task");

    initialPageLoad();

    defaultList.addEventListener("click", function() {
        listTitle.textContent = this.textContent;
        taskContainer.replaceChildren();
        updateTaskContainer(listTitle.textContent);
        addTask(listTitle.textContent);
        deleteTask(listTitle.textContent);
    });
    
    function initialPageLoad() {
        listTitle.textContent = "MyTask";
        taskContainer.replaceChildren();
        updateTaskContainer(listTitle.textContent)
        addTask(listTitle.textContent);
        deleteTask(listTitle.textContent);
    }

    function updateTaskContainer(item) {
        for (let i = 0; i < todoList.getList(item).length; i++) {
            taskContainer.appendChild(taskCard(
                todoList.getList(item)[i].title,
                todoList.getList(item)[i].description,
                todoList.getList(item)[i].date
            ));
        }
    }

    function taskCard(title, description, date) {
        const taskCard = document.createElement("div");
        const taskTitle = document.createElement("h2")
        const taskDescription = document.createElement("p");
        const taskDate = document.createElement("p");
        const taskComplete = document.createElement("input");
        const taskCompleteLabel = document.createElement("label");
        const deleteTask = document.createElement("button");
        const editTask = document.createElement("button");

        taskTitle.textContent = title;
        taskDescription.textContent = description;
        taskDate.textContent = date;
        taskCompleteLabel.textContent = "Task Complete ";
        deleteTask.textContent = "Delete";
        editTask.textContent = "Edit";

        deleteTask.classList.add("delete-list");

        taskComplete.setAttribute("type", "checkbox");

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDate);
        taskCompleteLabel.appendChild(taskComplete);
        taskCard.appendChild(taskCompleteLabel);
        taskCard.appendChild(deleteTask);
        taskCard.appendChild(editTask);

        return taskCard;
    }

    function addTask(item) {
        document.addEventListener("click", function(e) {
            if (e.target.className === "add-task") {
                addTaskModal.showModal();

                submitTask.addEventListener("click", function() {
                    todoList.createListTask(
                        item,
                        addTaskTitle.value,
                        addTaskDescription.value,
                        addTaskDate.value
                    );
                    taskContainer.replaceChildren();
                    updateTaskContainer(item);
                },{once: true});
            }
        });
    }

    function deleteTask(item) {
        document.addEventListener("click", function(e){
            if (e.target.className === "delete-list") {
                todoList.deleteListTask(
                    item,
                    e.target.parentElement.children[0].textContent
                );
                taskContainer.replaceChildren();
                updateTaskContainer(item);
            }
        });
    }

}