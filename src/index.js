import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TasksList(){
	return(
			<ul>
				<li className="tasks-items">Follow Edukashon.ph on Facebook</li>
				<li className="tasks-items">Follow AWS Siklab Pilipinas on Facebook</li>
				<li className="tasks-items">Follow Zuitt Codking Bootcamp on Facebook</li>
			</ul>
		)
}


// My first component
function App() {
	const paraStyle = {
		"marginBottom": "20px",
		"marginTop": "0px"
	};


	return (
	<div className="app">
		<header className="app-header">
			<h1>My Amazing ToDo-List App</h1>
			<p style={paraStyle}>The most simple and amazing todo-list React app.</p>
			<TasksList />
		</header>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
