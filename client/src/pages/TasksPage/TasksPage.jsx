import { useEffect, useState } from "react";
import TaskApi from "../../entities/task/TaskApi";
import Btn from "../../shared/ui/Btn/Btn";
import TaskList from "../../widgets/TaskList/TaskList";

function TasksPage() {

    const [tasks, setTasks] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        // document.body.style.backgroundColor = 'green'
        handlerFetchingTasks()
    }, [toggle])

    const handlerFetchingTasks = async () => {
        const allTasks = await TaskApi.getAllTasks();
        setTasks(allTasks.data)
    }

    const handlerRefresh = async () => {
        setToggle(prevState => !prevState)
    }

    return (
        <>
            <h1>Tasks Page</h1>
            <Btn func={handlerFetchingTasks} text={'Get all tasks'} />
            <Btn func={handlerRefresh} text={'Refresh'} />
            <TaskList arrTasks={tasks} />
        </>
    );
}

export default TasksPage;