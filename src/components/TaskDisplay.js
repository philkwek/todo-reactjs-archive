import '../index.css';
import TaskList from './TaskList.js';

const TaskDisplay = (props) => {

    const taskCheckHandler = (event) => {
        props.onTaskChecked(event);
    }

    return (
        <div className="flex flex-row items-center">
            <TaskList onTaskChecked={taskCheckHandler} tasks={props.tasks} />
        </div>
    );
};

export default TaskDisplay;
