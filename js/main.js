'use strict';

let todoApp = function() {

	const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	const headerDateContainer = document.querySelector('.header__date');
	const taskListContainer = document.querySelector('.task__list');


	let store = {
		taskList: [
			{number: 0, name: 'Tarea', completed: false},
			{number: 1, name: 'Tarea', completed: false},
			{number: 2, name: 'Tarea', completed: false}
		]
	};

	function renderDate(){
		const date = new Date();

		return `
			<h2 class="header__date-number">${date.getDate()}</h2>
			<div class="header__date-days">
				<p class="header__day">${days[date.getDay()-1]}</p>
				<p class="header__month">${months[date.getMonth()]},<span class="header__year">${date.getFullYear()}</span></p>
			</div>
		`;
	}

	function renderTasks(taskList){
		let taskListElements = '';

		taskList.forEach(function(task){
			const className = (task.completed) ? 'task__completed' : '';

			taskListElements += `
				<li class="task">
					<input type="checkbox" class="task__button-check" ${(task.completed)? 'checked':''}></input>
					<p class="task__title ${className}">${task.name} <span class="task__number">${task.number}</span></p>
				</li>
			`;
		});

		return taskListElements;
	}

	function render(){
		console.log(store);
		headerDateContainer.innerHTML = renderDate();
		taskListContainer.innerHTML = renderTasks(store.taskList);

		const checkTaskList = document.querySelectorAll('.task__button-check');
		console.log(checkTaskList);
		checkTaskList.forEach(function(checkTask, idx){
			checkTask.addEventListener('click', function(){
				markTaskCompleted(idx);
			});
		});
	}

	function markTaskCompleted(taskNumber) {
		console.log('estoy dentro de la fn',taskNumber);
		store.taskList[taskNumber].completed = !store.taskList[taskNumber].completed;

		store.taskList.sort(function(a,b){
			if (a.completed === b.completed) return 0;
			if (a.completed > b.completed) return 1;
			if (a.completed < b.completed) return -1;
		});

		render();
		//task[0].children[1].classList.add('task__completed');
	}

	render();



}

();
