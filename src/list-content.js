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
        const listItemContainer = document.createElement("div");

        listItem.textContent = item;
        deleteListItemButton.textContent = "\u2A09";

        listItem.classList.add("list-item");
        deleteListItemButton.classList.add("delete-list-item-button");
        listItemContainer.classList.add("list-item-container");

        deleteListItem(deleteListItemButton);

        listItemContainer.appendChild(listItem);
        listItemContainer.appendChild(deleteListItemButton);
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
        })
    }

    renderListContainer(todoList.list)
    addListItem(todoList);
}