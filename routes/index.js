var express = require('express');
var router = express.Router();
const {
  addTask,
  getAllTasks,
  removeTaskById,
} = require('../controllers/tasks');

/* List all tasks. */
router.get('/tasks', getAllTasks);

/* Add a new task. */
router.post('/tasks', addTask);

/* Delete a task by ID. */
router.delete('/tasks/:id', removeTaskById);

module.exports = router;
