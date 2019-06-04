print = console.log;

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hand of a computer',
	options: []
}

const showDetails = () => {
	visibility = !visibility;
	renderUI();

}

const onMakeDecision = () => {
	const randomPick = app.options[Math.floor(Math.random() * app.options.length)];
	alert(randomPick);
}
const onFormSubmit = (e) => {
	e.preventDefault(); //  prevents page from reloading

	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		renderUI();
	}
}

const removeAll = () => {
	app.options = [];
	renderUI();
}

let appRoot = document.getElementById('app');
let visibility = true;

const renderUI  = () => {
	const template = (
			<div>
				<h1>{app.title}</h1>
				{app.subtitle? <p>{app.subtitle}</p> : ''}
				<p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
				<button onClick={showDetails}> {visibility ? 'Hide details': 'Show details'} </button>
				{ visibility && (
						<div>
							<p>this is the detail</p>
						</div>
					)
				}
				<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>				
				<button onClick={removeAll}>Remove all</button>
				<ol>
					{
						app.options.map(option => {
							return <li key={option}>{option}</li>
						})
					}
				</ol>
				<form onSubmit={onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
	);
	ReactDOM.render(template, appRoot);
}

renderUI();