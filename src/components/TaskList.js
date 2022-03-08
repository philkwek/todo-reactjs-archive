import TaskItem from './TaskItem.js';
import '../index.css';

const TaskList = (props) => {
    let taskContent = <h1>No Tasks!</h1>;

    const taskCheckedHandler = (event) => {
        props.onTaskChecked(event);
    };

    if(props.tasks){
        if (props.tasks.length > 0){
            let key = 0;
            taskContent = props.tasks.map(data =>
            <TaskItem onTaskChecked={taskCheckedHandler} key={key += 1} taskStatus ={data.taskStatus} taskId = {data.id} taskName = {data.taskName} taskDescription = {data.taskDescription}></TaskItem>)
        }
    };

    return (
        <div>
            {taskContent}
        </div>
    );
}

export default TaskList;