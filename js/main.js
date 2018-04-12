'use strict';

let todoApp = function() {

	const store = {
		days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		dayNumber: document.querySelector('.header__date-number'),
		dayName: document.querySelector('.header__day'),
		monthName: document.querySelector('.header__month'),
		yearNumber: document.querySelector('.header__year')
	};
	console.log('Number', store.dayNumber);
	console.log('DayName', store.dayName);
	console.log('monthName', store.monthName);
	console.log('yearNumber', store.yearNumber);




	function getDates(days, months, dayNumber, dayName, monthName, yearNumber) {
		let date = new Date();

		dayNumber.innerHTML = date.getDate();
		dayName.innerHTML = days[date.getDay()-1];
		console.log(days[date.getDay()-1]);
		monthName.innerHTML = months[date.getMonth()];
		yearNumber.innerHTML = date.getFullYear();
	}

	getDates(store.days, store.months, store.dayNumber, store.dayName, store.monthName, store.yearNumber);











}

();
