const todoList = [
	{ name: 'make dinner', dueDate: '28/05/2024' },
	{ name: 'wash dishes', dueDate: '28/05/2024' },
];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';

	todoList.forEach(function (todoObject, index) {
		const { name, dueDateSp } = todoObject;
		const html = `
			<div>${name}</div>
			<div>${dueDateSp}</div>
			<button onclick="
				todoList.splice(${index}, 1);
				renderTodoList();"
				class="delete-todo-button">
					Delete
			</button>
		`;
		todoListHTML += html;
	});
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
}
