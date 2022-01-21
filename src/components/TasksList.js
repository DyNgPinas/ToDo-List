import Task from "./Task";

function TasksList(){

	const taskItemsList = [
	"Follow Edukashon.ph on Facebook",
	"Follow AWS Siklab Phil. on FB",
	"Follow Zuitt Coding BootCamp"
	]

	return(
		<div>
			<input className="task-input" />
			<ul>
				{taskItemsList.map( (task, index) => {
					console.log(task);
					return <Task key={index} taskName={task} />
				})}
			</ul>
		</div>
		)
}

export default TasksList;