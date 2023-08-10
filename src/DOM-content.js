export function DOMController(todoList) {
    // list 
    const listContainer = document.querySelector(".list-container");
    const addListButton = document.querySelector(".add-list-button");
    const addListModal = document.querySelector(".add-list-modal");
    const addListSubmitButton = document.querySelector(".add-list-submit-button");
    const addListInput = document.querySelector(".add-list-input");
    // task
    const taskContent = document.querySelector(".task-content");
    const taskContainer = document.querySelector(".task-container");
    const taskListTitle = document.querySelector(".task-list-title");
    const addListTaskButton = document.querySelector(".add-list-task-button");
    const addListTaskModal = document.querySelector(".add-list-task-modal");
    const addListTaskTitleInput = document.querySelector(".add-list-task-title-input");
    const addListTaskDescriptionInput = document.querySelector(".add-list-task-description-input");
    const addListTaskDateInput = document.querySelector(".add-list-task-date-input");
    const addListTaskSubmitButton = document.querySelector(".add-list-task-submit-button");

    function updateListContainer(item) {
        const listItem = document.createElement("p");
        const deleteListItemButton = document.createElement("button");
        const editListItemButton = document.createElement("button");
        const editListItemModal = document.createElement("dialog");
        const editListItemForm = document.createElement("form");
        const editListItemFormTitle = document.createElement("h1");
        const editListItemInput = document.createElement("input");
        const editListItemSubmitButton = document.createElement("button");
        const editListItemCancelButton = document.createElement("button");
        const listItemContainer = document.createElement("div");

        listItem.textContent = item;
        editListItemFormTitle.textContent = "Edit List";
        editListItemSubmitButton.textContent = "Submit";
        editListItemCancelButton.textContent = "Cancel";

        listItem.classList.add("list-item");
        deleteListItemButton.classList.add("delete-list-item-button");
        editListItemButton.classList.add("edit-list-item-button");
        editListItemModal.classList.add("edit-list-item-modal");
        editListItemForm.classList.add("edit-list-item-form");
        editListItemInput.classList.add("edit-list-item-input");
        editListItemSubmitButton.classList.add("edit-list-item-submit-button");
        editListItemCancelButton.classList.add("edit-list-item-cancel-button");
        listItemContainer.classList.add("list-item-container");

        editListItemForm.setAttribute("method", "dialog");
        editListItemInput.setAttribute("placeholder", "New List Name");

        deleteListItem(deleteListItemButton);
        editListItem(
            {
                listItem,
                editListItemButton, 
                editListItemModal, 
                editListItemInput, 
                editListItemSubmitButton
            }
        );
        getListItem(listItem)

        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(deleteListItemButton);
        listItemContainer.appendChild(editListItemButton);
        editListItemForm.appendChild(editListItemFormTitle);
        editListItemForm.appendChild(editListItemInput);
        editListItemForm.appendChild(editListItemSubmitButton);
        editListItemForm.appendChild(editListItemCancelButton);
        editListItemModal.appendChild(editListItemForm);
        listItemContainer.appendChild(editListItemModal);
        listContainer.appendChild(listItemContainer);
    }

    function addListItem(item) {
        addListButton.addEventListener("click", function() {
            addListModal.showModal();
        });
        
        addListSubmitButton.addEventListener("click", function() {
            if (addListInput.value) {
                item.createList(addListInput.value);
                updateListContainer(addListInput.value);
                addListInput.value = "";
            } else {
                alert("Please provide a list name");
            }
        });
    }

    function deleteListItem(deleteListItemButton) {
        deleteListItemButton.addEventListener("click", function() {
            todoList.deleteList(this.previousElementSibling.textContent);
            this.parentElement.remove();
        });
    }

    function editListItem(item) {
        item.editListItemButton.addEventListener("click", function() {
            item.editListItemModal.showModal();
            item.editListItemSubmitButton.addEventListener("click", function() {
                if (item.editListItemInput.value) {
                    todoList.renameList(item.listItem.textContent, item.editListItemInput.value);
                    item.listItem.textContent = item.editListItemInput.value;
                }
            });
        });
    }

    //task
    function getListItem(item) {
        item.addEventListener("click", function() {
            taskListTitle.textContent = item.textContent
            
            console.log(item);
            addListTask(
                item,
                addListTaskTitleInput, 
                addListTaskDescriptionInput, 
                addListTaskDateInput,
                addListTaskSubmitButton
                ) 
        });
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
        listItem,
        addListTaskTitleInput, 
        addListTaskDescriptionInput, 
        addListTaskDateInput,
        addListTaskSubmitButton
        ) {
            addListTaskButton.addEventListener("click", function() {
                addListTaskModal.showModal();
            });

            addListTaskSubmitButton.addEventListener("click", function() {
                todoList.createListTask(
                    listItem.textContent, 
                    addListTaskTitleInput.value,
                    addListTaskDescriptionInput.value,
                    addListTaskDateInput.value);

                updateTaskContainer(
                    addListTaskTitleInput.value,
                    addListTaskDescriptionInput.value, 
                    addListTaskDateInput.value);
            });
    }

    addListItem(todoList);
}