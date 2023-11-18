const { v4: uuid } = require('uuid');

let tasksData = [];
const errorMesages = {
  404: 'Task not found.',
  400: 'Bad request, please include a valid title.',
  500: 'Something went wrong.',
};
// TODO: Handle errors more accurately
// Returns all stored tasks.
const getAllTasks = async (_, res) => {
  try {
    res.status(200).json(tasksData);
  } catch (e) {
    res.status(500).json({ message: errorMesages[500] });
  }
};

// Add a new task
const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!newTaskIsValid(title)) res.sendStatus(400).errorMesages[400];
    const newTask = {
      title,
      description,
      id: uuid(),
    };
    tasksData.push(newTask);
    res.status(201).json(tasksData);
  } catch (e) {
    res.status(500).json({ error: e, message: errorMesages[500] });
  }
};

// Remove task by id.
const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!taskExists(tasksData, id)) res.sendStatus(404);
    tasksData = tasksData.filter((task) => task.id !== id);
    res.status(204).json(tasksData);
  } catch (e) {
    res.status(500).json({ message: errorMesages[500] });
  }
};

const taskExists = (tasks, id) => {
  return tasks.find((task) => task.id == id);
};

const newTaskIsValid = (title) => {
  return title.length > 0;
};

module.exports = { addTask, getAllTasks, deleteTaskById };
