// To-Do List Functionality
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const task = input.value.trim();
	if (task) {
		addTask(task);
		input.value = '';
	}
});

function addTask(task) {
	const li = document.createElement('li');
	li.textContent = task;
	li.addEventListener('click', function() {
		li.classList.toggle('completed');
	});
	const delBtn = document.createElement('button');
	delBtn.textContent = '✕';
	delBtn.className = 'delete-btn';
	delBtn.addEventListener('click', function(e) {
		e.stopPropagation();
		li.remove();
	});
	li.appendChild(delBtn);
	list.appendChild(li);
}
