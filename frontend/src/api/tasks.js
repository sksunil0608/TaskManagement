import axios from "axios"
const url = "http://localhost:4000"
export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${url}/tasks`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postAddTask = async (newTask) => {
    try {
        const response = await axios.post(`${url}/add`, { 
            title: newTask.title, 
            description: newTask.description, 
            status: newTask.status 
        })
        return response

    } catch (error) {
        console.log(error)
        
    }
}

export const postUpdateTask = async (taskId, newStatus) => {
    try {
        const response = await axios.post(`${url}/update/${taskId}`, { status: newStatus });
        return { response: response.data, message: "Task Updated Successfully" };
    } catch (error) {
        console.log(error);
        return { error: error.response.data, message: "Error updating task" };
    }
}

export const postDelteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${url}/delete/${taskId}`);
        return { response: response.data, message: "Task Deleted Successfully" };
    } catch (error) {
        console.log(error);
        return { error: error.response.data, message: "Error deleting task" };
    }
}
