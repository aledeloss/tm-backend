var express = require('express');
var router = express.Router();
const { getAllTasks } = require('../controllers/tasks');

/* List all tasks. */
router.get('/tasks', getAllTasks);

/* Add a new task. */
router.post('/tasks', function (req, res, next) {
  res.status(200).json({ response: 'Well done post' });
});

/* Delete a task by ID. */
router.delete('/tasks', function (req, res, next) {
  res.status(200).json({ response: 'Well done delete' });
});

module.exports = router;
