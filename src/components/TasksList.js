import { useState } from "react";
import Task from "./Task";

function TasksList(){

	const [taskItemsList, setTaskItemsList] = useState( [
	"Follow Edukashon.ph on Facebook",
	"Follow AWS Siklab Phil. on FB",
	"Follow Zuitt Coding BootCamp"
	]);

    const [taskValue, setTaskValue] = useState("");

    const inputChangeHandler = (e) =>{
        setTaskValue(e.target.value)
    };


    const addTaskHandler = (e) => {
        setTaskItemsList([e.target.value, ...taskItemsList]);
        setTaskValue("");
    };


	return(
		<div>

			<input

            className="task-input"
            placeholder="Create a new Task"
            onChange={inputChangeHandler}
            onBlur={addTaskHandler}
            value={taskValue}
            
            />

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