/* eslint-disable react/prop-types */
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ arrTasks }) {

    return (
        <>
            {arrTasks.length === 0 ? <h3>No data</h3> : arrTasks.map(task => <TaskItem key={task.id} task={task} />)}
        </>

    );
}

export default TaskList;