import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props){
	console.log(props);
	return (
			<li className="tasks-items">{props.taskName}</li>
			)
}

function TasksList(){

	const taskItemsList = [
	"Follow Edukashon.ph on Facebook",
	"Follow AWS Siklab Phil. on FB",
	"Follow Zuitt Coding BootCamp"
	]

	return(
			<ul>
				{taskItemsList.map( (task, index) => {
					console.log(task);
					return <Task key={index} taskName={task} />
				})}
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
