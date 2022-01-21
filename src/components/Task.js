function Task(props){
	console.log(props);
	return (
			<li className="tasks-items">{props.taskName}</li>
			)
}

export default Task;