const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('.btn');
const tasksContainerElementL = document.querySelector('.tasks');
const tasks = ['wyrzucić smieci', 'pójść na siłke', 'nakarmic koty'];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerText = task;
        tasksContainerElementL.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
