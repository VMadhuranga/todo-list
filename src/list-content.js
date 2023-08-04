export function ListContent() {
    const listContainer = document.querySelector(".list-container");
    const addListButton = document.querySelector(".add-list-button");
    const addListModal = document.querySelector(".add-list-modal");
    const submitListButton = document.querySelector(".submit-list-button");
    const listName = document.querySelector(".list-name");

    function renderListContainer(item) {
        item.forEach(item => {
            const listItem = document.createElement("p");
            listItem.textContent = Object.getOwnPropertyNames(item);
            listContainer.appendChild(listItem);
        });
    }

    function updateListContainer(item) {
        const listItem = document.createElement("p");
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    }

    function addList(item) {
        addListButton.addEventListener("click", function() {
            addListModal.show();
            // addListModal.showModal()
        });
        
        submitListButton.addEventListener("click", function() {
            item.createList(listName.value);
            updateListContainer(listName.value);
            console.log(item);
        });
    }

    return {renderListContainer, addList};
}