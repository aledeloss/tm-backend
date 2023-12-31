const express = require('express');
const router = express.Router();
const {
  addTask,
  getAllTasks,
  deleteTaskById,
} = require('../controllers/tasks');

/* List all tasks. */
router.get('/tasks', getAllTasks);

/* Add a new task. */
router.post('/tasks', addTask);

/* Delete a task by ID. */
router.delete('/tasks/:id', deleteTaskById);

module.exports = router;
