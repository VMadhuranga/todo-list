export function TaskContent(todoList, listItem) {
    const taskContent = document.querySelector(".task-content");
    const taskContainer = document.querySelector(".task-container");
    const taskListTitle = document.querySelector(".task-list-title");
    const addListTaskButton = document.querySelector(".add-list-task-button");
    const addListTaskModal = document.querySelector(".add-list-task-modal");
    const addListTaskTitleInput = document.querySelector(".add-list-task-title-input");
    const addListTaskDescriptionInput = document.querySelector(".add-list-task-description-input");
    const addListTaskDateInput = document.querySelector(".add-list-task-date-input");
    const addListTaskSubmitButton = document.querySelector(".add-list-task-submit-button");

    listItem.addEventListener("click", function() {
        taskListTitle.textContent = this.textContent
        if (taskContainer.children.length === 0) {
            renderTaskContainer(this.textContent, todoList.getList(this.textContent));
        } else {
            taskContainer.replaceChildren()
            renderTaskContainer(this.textContent, todoList.getList(this.textContent))
        }
    });
    
    addListTaskButton.addEventListener("click", function() {
        addListTaskModal.showModal();
        addListTask(
            addListTaskTitleInput, 
            addListTaskDescriptionInput, 
            addListTaskDateInput,
            addListTaskSubmitButton);
    });
    
    function renderTaskContainer(listItem, task) {
        for (let i = 0; i < task.length; i++) {
            updateTaskContainer(
                todoList.getListTask(listItem, task[i].title).title,
                todoList.getListTask(listItem, task[i].title).description,
                todoList.getListTask(listItem, task[i].title).date
            );
        }
    }

    function updateTaskContainer(title, description, date) {
        const listTaskContent = document.createElement("div");
        const listTaskTitle = document.createElement("h3");
        const listTaskDescription = document.createElement("p");
        const listTaskDate = document.createElement("p");
        const listTaskStatusInput = document.createElement("input");
        const listTaskStatusInputLabel = document.createElement("label");
        
        listTaskTitle.textContent = title;
        listTaskDescription.textContent = description;
        listTaskDate.textContent = `Date: ${date}`;
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

                updateTaskContainer(
                    addListTaskTitleInput.value,
                    addListTaskDescriptionInput.value, 
                    addListTaskDateInput.value);
            });
    }
}