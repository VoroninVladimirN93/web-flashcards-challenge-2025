class TaskApi {
    static async getAllTasks() {
        const response = await fetch('http://localhost:3000/api/tasks');
        const allTasks = await response.json();
        return allTasks;
    }

    // getTaskById
    // createTask
    static async createTask(data) {
        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    }
    // updsteTask
    // deleteTask
}

export default TaskApi;

