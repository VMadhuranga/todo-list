export function ListContent(todoList) {
    const listContainer = document.querySelector(".list-container");
    const addListButton = document.querySelector(".add-list-button");
    const addListModal = document.querySelector(".add-list-modal");
    const addListSubmitButton = document.querySelector(".add-list-submit-button");
    const addListInput = document.querySelector(".add-list-input");

    function renderListContainer(list) {
        list.forEach(item => {
            updateListContainer(Object.getOwnPropertyNames(item));
        });
    }

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

    renderListContainer(todoList.list)
    addListItem(todoList);
}