
const Task = require("../models/task");
const indexView = async (req, res) => {
    try {
        res.redirect('http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
}

const postDeleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Delete the task
        await task.destroy();

        // Return a success response
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}
const getAllTasks = async (req, res) => {
    try {
        const response = await Task.findAll()
        res.json({response:response, message:"Tasks fetched Successfully"})
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}
const postAddTask = async (req, res) => {
    try {
        const { title: title, description: description, status: status } = req.body;
        const response = await Task.create({
            title:title,
            description:description,
            status:status
        })
        res.json({ response: response, message: "Task Added Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}
const postUpdateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const newStatus = req.body.status;
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        // Update only the status field of the task
        await task.update({ status: newStatus });

        res.json({ message: "Task Updated Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    indexView: indexView,
    getAllTasks:getAllTasks,
    postAddTask:postAddTask,
    postDeleteTask:postDeleteTask,
    postUpdateTask:postUpdateTask
};