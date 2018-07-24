import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Markdown from "react-textarea-markdown";
class App extends Component {
	constructor ( props ){
		super( props );
		this.state={
			value:`# Live demo\nChanges are automatically rendered as you type.\n* My name is Jiayuan Chen\n* Welcome [my blog](http://chenjy195.sc2yun.com/ "myblog")\n* A game enthusiast, Tech enthusiast \n* Like making wheels\n## 1. Table\n| hobby | match |\n| :------: | :-----------: |\n| games | ✔ |\n| sing song | ✔ |\n| js | ✔ |\n## 2. Checkbox\n- [ ] This\n- [ ] is\n- [x] checkbox\n## 3. Code\n\`\`\`\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nit('renders without crashing', () => {\n	const div = document.createElement('div');\n	ReactDOM.render(<App />, div);\n	ReactDOM.unmountComponentAtNode(div);\n});\n\`\`\`\n##4. Line\n===\n##5. Title\nhi\n---\n##6. FontStyle\n~~this is a del style~~\n**this is a fontWeight style**\n*Declining*\n***fontWeight and Declining***\n##7. List\n+ green\n+ yellow\n+ blue\n- red\n- gray\n1. frist\n2. second\n3. third\n## 8. Image\n![From Github](https://raw.githubusercontent.com/github/explore/872f6c3b794861fe3b1030add20788bc20e16a9b/collections/pixel-art-tools/pixel-art-tools.png "reboot")\n## 9. Quote\n>this is the footer\n>byebye~\n`
		}
	}
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React-Textarea-Markdown</h1>
				</header>
				<Markdown textarea={true} source={this.state.value}/>
			</div>
		);
	}
}

export default App;