const express = require('express')
const { indexView, postAddTask, postUpdateTask, postDeleteTask, getAllTasks } = require('../controllers/tasks')
const router = express.Router()

router.get('/',indexView)
router.get('/tasks',getAllTasks)
router.post('/add',postAddTask)
router.post('/update/:id',postUpdateTask)
router.delete('/delete/:id',postDeleteTask)

module.exports = router