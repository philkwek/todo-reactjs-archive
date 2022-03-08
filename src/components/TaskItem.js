import React, {useState} from "react";

const TaskItem = (props) => {

    let originalStatus = false;

    if (props.taskStatus === "true" || props.taskStatus === true){
        originalStatus = true;
    }

    const [taskStatus, setTaskStatus] = useState(originalStatus)

    const taskCheckHandler = (event) => {
        setTaskStatus(event.target.checked);
        const taskCheckData = {
            taskId: props.taskId,
            taskDone: event.target.checked
        };
        props.onTaskChecked(taskCheckData);
    };


    return (
        <div className="flex flex-row items-center mb-5">
            <input checked={taskStatus} id="taskCheckStatus" type="checkbox" onChange={taskCheckHandler} className="w-4 h-4 rounded-full focus:ring-1" />
            <div className="ml-3">
                <p className="text-base font-medium">{props.taskName}</p>
                <p className="text-xs text-gray-500">{props.taskDescription}</p>
             </div>
        </div>
    );
}

export default TaskItem;