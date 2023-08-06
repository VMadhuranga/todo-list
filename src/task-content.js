export function TaskContent(todoList, listItem) {
    listItem.addEventListener("click", function() {
        console.log(this.textContent);
        console.log(todoList.getList(this.textContent));
    });
}