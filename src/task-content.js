export function TaskContent(todoList, listItem) {
    const taskContainer = document.querySelector(".task-container");
    const taskListTitle = document.querySelector(".task-list-title");

    listItem.addEventListener("click", function() {
        taskListTitle.textContent = this.textContent;
        if (taskContainer.children.length === 0) {
            taskContainer.appendChild(
            renderTaskContainer(this.textContent, todoList.getList(this.textContent)));
        } else {
            taskContainer.replaceChild(
                renderTaskContainer(this.textContent, todoList.getList(this.textContent)),
                taskContainer.children[0]);
        }
    });

    function renderTaskContainer(listItem, task) {
        const listTask = document.createElement("div");

        for (let i = 0; i < task.length; i++) {
            const taskContent = document.createElement("div");
            const taskTitle = document.createElement("h3");
            const taskDescription = document.createElement("p");
            const taskDate = document.createElement("p");

            taskTitle.textContent = todoList.getListTask(listItem, task[i].title).title;
            taskDescription.textContent = todoList.getListTask(listItem, task[i].title).description;
            taskDate.textContent = todoList.getListTask(listItem, task[i].title).date;

            taskContent.appendChild(taskTitle);
            taskContent.appendChild(taskDescription);
            taskContent.appendChild(taskDate);
            listTask.appendChild(taskContent);
        }
        return listTask;
    }
}