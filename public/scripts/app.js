'use strict';

print = console.log;

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hand of a computer',
	options: []
};

var showDetails = function showDetails() {
	visibility = !visibility;
	renderUI();
};

var onMakeDecision = function onMakeDecision() {
	var randomPick = app.options[Math.floor(Math.random() * app.options.length)];
	alert(randomPick);
};
var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault(); //  prevents page from reloading

	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderUI();
	}
};

var removeAll = function removeAll() {
	app.options = [];
	renderUI();
};

var appRoot = document.getElementById('app');
var visibility = true;

var renderUI = function renderUI() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle ? React.createElement(
			'p',
			null,
			app.subtitle
		) : '',
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'button',
			{ onClick: showDetails },
			' ',
			visibility ? 'Hide details' : 'Show details',
			' '
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'this is the detail'
			)
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Remove all'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderUI();
