export function ListContent(todoList) {
    const listContainer = document.querySelector(".list-container");
    const addListButton = document.querySelector(".add-list-button");
    const addListModal = document.querySelector(".add-list-modal");
    const submitListButton = document.querySelector(".submit-list-button");
    const listName = document.querySelector(".list-name");

    function renderListContainer(list) {
        list.forEach(item => {
            updateListContainer(Object.getOwnPropertyNames(item));
        });
    }

    function updateListContainer(item) {
        const listItem = document.createElement("p");
        const deleteListItemButton = document.createElement("button");
        const editListItemButton = document.createElement("button");
        const editListModal = document.createElement("dialog");
        const editListForm = document.createElement("form");
        const editListInput = document.createElement("input");
        const editListSubmitButton = document.createElement("button");
        const listItemContainer = document.createElement("div");

        listItem.textContent = item;
        deleteListItemButton.textContent = "\u2A09";
        editListItemButton.textContent = "\u270F";
        editListSubmitButton.textContent = "Submit";

        listItem.classList.add("list-item");
        deleteListItemButton.classList.add("delete-list-item-button");
        editListItemButton.classList.add("edit-list-item-container");
        editListModal.classList.add("edit-list-modal");
        editListForm.classList.add("edit-list-form");
        editListInput.classList.add("edit-list-input");
        editListSubmitButton.classList.add("edit-list-submit-button");
        listItemContainer.classList.add("list-item-container");

        editListForm.setAttribute("method", "dialog");

        deleteListItem(deleteListItemButton);
        editListItem(editListItemButton, editListModal, editListInput, editListSubmitButton);

        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(deleteListItemButton);
        listItemContainer.appendChild(editListItemButton);
        editListForm.appendChild(editListInput);
        editListForm.appendChild(editListSubmitButton);
        editListModal.appendChild(editListForm);
        listItemContainer.appendChild(editListModal);
        listContainer.appendChild(listItemContainer);
    }

    function addListItem(item) {
        addListButton.addEventListener("click", function() {
            addListModal.show();
            // addListModal.showModal()
        });
        
        submitListButton.addEventListener("click", function() {
            if (listName.value) {
                item.createList(listName.value);
                updateListContainer(listName.value);
            }
            console.log(item);
        });
    }

    function deleteListItem(button) {
        button.addEventListener("click", function() {
            todoList.deleteList(this.previousElementSibling.textContent);
            this.parentElement.remove();
            console.log(todoList);
        });
    }

    function editListItem(editButton, editListModal, editListInput, editListSubmitButton) {
        editButton.addEventListener("click", function() {
            editListModal.show();
            editListSubmitButton.addEventListener("click", function() {
                if (editListInput.value) {
                    todoList.renameList(editButton.parentElement.children[0].textContent, editListInput.value);
                    editButton.parentElement.children[0].textContent = editListInput.value;
                }
                console.log(todoList);
            });
        });
    }

    renderListContainer(todoList.list)
    addListItem(todoList);
}