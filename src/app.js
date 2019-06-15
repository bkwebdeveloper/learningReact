console.log(this);



class Indecision extends React.Component {
	render(){
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['one', 'two', 'three'];
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render(){
		// console.log(this.props.subtitle)
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	handlePick(){
		alert('HandlePick')
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	
	handleRemoveAll(){
		alert('remove all')
	}

	render(){
		// console.log(this.props.options) 
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove all</button>
				{
					this.props.options.map(option => {
						return <Option key={option} optionText={option} />
					})
				}
			</div>
		);
	}
}

class Option extends React.Component {
	render(){
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOption extends React.Component {
	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if(option) alert(option);
	}
	render(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type='text' name='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<Indecision />, document.getElementById('app'));