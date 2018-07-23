import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Markdown from "react-textarea-markdown";
class App extends Component {
	constructor ( props ){
		super( props );
	}
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React-Textarea-Markdown</h1>
				</header>
				<Markdown textarea={true} />
			</div>
		);
	}
}

export default App;