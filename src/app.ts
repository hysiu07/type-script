const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('.btn');
const tasksContainerElementL: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['wyrzucić smieci', 'pójść na siłke', 'nakarmic koty'];

const render = () => {
	tasks.forEach((task) => {
		const taskElement: HTMLElement = document.createElement('li');
		taskElement.innerText = task;
		tasksContainerElementL.appendChild(taskElement);
	});
};

const addTask = (task: string) => {
	tasks.push(task);
};

addButtonElement.addEventListener('click', (e) => {
	e.preventDefault();
	addTask(taskNameInputElement.value);
    render()
});
