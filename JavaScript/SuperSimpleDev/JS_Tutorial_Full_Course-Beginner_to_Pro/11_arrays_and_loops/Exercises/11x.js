const todoList = JSON.parse(localStorage.getItem('todoList')) || [
	{ name: 'make dinner', dueDate: '28/05/2024' },
	{ name: 'wash dishes', dueDate: '28/05/2024' },
];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';

	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		const name = todoObject.name;
		const dueDate = todoObject.dueDate;
		const html = `
			<div>${name}</div>
			<div>${dueDate}</div>
			<button onclick="
				todoList.splice(${i}, 1);
				renderTodoList();"
				class="delete-todo-button">
					Delete
			</button>
		`;
		todoListHTML += html;
	}
	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	const dateInputElement = document.querySelector('.js-dueDate-input');
	const dueDate = dateInputElement.value;
	const dueDateSp = dueDate.split('-').reverse().join('/');

	todoList.push({ name, dueDate: dueDateSp });
	inputElement.value = '';
	dateInputElement.value = '';

	renderTodoList();

	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('todoList', JSON.stringify(todoList));
}
