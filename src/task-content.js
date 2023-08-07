export function TaskContent(todoList, listItem) {
    const taskContent = document.querySelector(".task-content");

    listItem.addEventListener("click", function() {
        if (taskContent.children.length === 0) {
            taskContent.appendChild(
                renderTaskContainer(this.textContent, todoList.getList(this.textContent)));
        } else {
            taskContent.replaceChild(
                renderTaskContainer(this.textContent, todoList.getList(this.textContent)),
                taskContent.children[0]);
        }
    });
    
    function renderTaskContainer(listItem, task) {
        const taskContainer = document.createElement("div");
        const taskListTitleContent = document.createElement("div");
        const taskListTitle = document.createElement("h2");
        const addListTaskButton = document.createElement("button");

        taskListTitle.textContent = listItem;
        addListTaskButton.textContent = "Add Task";

        taskContainer.classList.add("task-container");
        taskListTitleContent.classList.add("task-list-title-content");
        taskListTitle.classList.add("task-list-title");
        addListTaskButton.classList.add("add-list-task-button");

        taskListTitleContent.appendChild(taskListTitle);
        taskListTitleContent.appendChild(addListTaskButton);
        taskContainer.appendChild(taskListTitleContent);

        
        for (let i = 0; i < task.length; i++) {
            const listTaskContent = document.createElement("div");
            const listTaskTitle = document.createElement("h3");
            const listTaskDescription = document.createElement("p");
            const listTaskDate = document.createElement("p");
            const listTaskStatusInput = document.createElement("input");
            const listTaskStatusInputLabel = document.createElement("label");
            
            listTaskTitle.textContent = todoList.getListTask(listItem, task[i].title).title;
            listTaskDescription.textContent = todoList.getListTask(listItem, task[i].title).description;
            listTaskDate.textContent = `Date: ${todoList.getListTask(listItem, task[i].title).date}`;
            listTaskStatusInputLabel.textContent = "Mark as done: ";
            
            listTaskStatusInput.setAttribute("type", "checkbox");
            listTaskStatusInputLabel.setAttribute("id", "status");
            listTaskStatusInput.setAttribute("id", "status");
            
            
            listTaskContent.appendChild(listTaskTitle);
            listTaskContent.appendChild(listTaskDescription);
            listTaskContent.appendChild(listTaskDate);
            listTaskStatusInputLabel.appendChild(listTaskStatusInput);
            listTaskContent.appendChild(listTaskStatusInputLabel);
            taskContainer.appendChild(listTaskContent);
        }
        showAddListTaskModal(addListTaskButton);
        return taskContainer;
    }

    function showAddListTaskModal(button) {
        button.addEventListener("click", function() {
            createAddListTaskModal().showModal();
        });
    }

    function createAddListTaskModal() {
        const addListTaskModal = document.createElement("dialog");
        const addListTaskForm = document.createElement("form");
        const addListTaskTitleInput = document.createElement("input");
        const addListTaskDescriptionInput = document.createElement("textarea");
        const addListTaskDateLabelInput = document.createElement("label");
        const addListTaskDateInput = document.createElement("input");
        const addListTaskSubmitButton = document.createElement("button");
        const addListTaskCancelButton = document.createElement("button");

        addListTaskModal.classList.add("add-list-task-modal");
        addListTaskForm.classList.add("add-list-task-form");
        addListTaskTitleInput.classList.add("add-list-task-title-input");
        addListTaskDescriptionInput.classList.add("add-list-task-description-input");
        addListTaskDateInput.classList.add("add-list-task-date-input");
        addListTaskSubmitButton.classList.add("add-list-task-submit-button");
        addListTaskCancelButton.classList.add("add-list-task-cancel-button");

        addListTaskDateLabelInput.textContent = "Set Date";
        addListTaskSubmitButton.textContent = "Submit";
        addListTaskCancelButton.textContent = "Cancel";

        addListTaskForm.setAttribute("method", "dialog");
        addListTaskTitleInput.setAttribute("placeholder", "Title");
        addListTaskDescriptionInput.setAttribute("placeholder", "Description");
        addListTaskDescriptionInput.setAttribute("maxlength", "100");
        addListTaskDateInput.setAttribute("type", "date");
        addListTaskDateLabelInput.setAttribute("id", "date");
        addListTaskDateInput.setAttribute("id", "date");

        addListTask(
            addListTaskTitleInput, 
            addListTaskDescriptionInput, 
            addListTaskDateInput,
            addListTaskSubmitButton
        );
        
        addListTaskForm.appendChild(addListTaskTitleInput);
        addListTaskForm.appendChild(addListTaskDescriptionInput);
        addListTaskDateLabelInput.appendChild(addListTaskDateInput);
        addListTaskForm.appendChild(addListTaskDateLabelInput);
        addListTaskForm.appendChild(addListTaskSubmitButton);
        addListTaskForm.appendChild(addListTaskCancelButton);
        addListTaskModal.appendChild(addListTaskForm);
        taskContent.appendChild(addListTaskModal);

        return addListTaskModal;
    }

    function addListTask(
        addListTaskTitleInput, 
        addListTaskDescriptionInput, 
        addListTaskDateInput,
        addListTaskSubmitButton) {
            
            addListTaskSubmitButton.addEventListener("click", function() {
                todoList.createListTask(
                    listItem.textContent, 
                    addListTaskTitleInput.value,
                    addListTaskDescriptionInput.value,
                    addListTaskDateInput.value);
                    
                console.log(addListTaskTitleInput.value);
                console.log(addListTaskDescriptionInput.value);
                console.log(addListTaskDateInput.value);
                console.log(todoList);
            });
    }
}