export function ListContent() {
    const listContainer = document.querySelector(".list-container");

    function renderListContainer(items) {
        items.forEach(item => {
            const listItem = document.createElement("p");
            listItem.textContent = Object.getOwnPropertyNames(item);
            listContainer.appendChild(listItem);
        });
    }

    return {updateListContainer};
}