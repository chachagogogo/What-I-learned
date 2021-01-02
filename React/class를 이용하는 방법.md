```js
import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 },
		],
		otherState: 'some other value',
	};

	switchNameHandler = () => {
		// console.log("was clicked");
		//! DON'T DO THIS: this.state.persons[0].name = "Maximilian";
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 },
			],
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					My Hobbies: Racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
```
