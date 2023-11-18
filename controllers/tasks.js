let tasks = [
  {
    id: 1,
    title: 'Home test',
    description: 'long description',
  },
];

// TODO: Handle errors more accurately
// Returns all stored tasks.
const getAllTasks = async (req, res) => {
  try {
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Add a new task
const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    // TODO:Validate if task already exists and no empty title
    const newTask = {
      title,
      description,
      id: 2, // TODO: Add a unique id
    };
    tasks.push(newTask);
    res.status(201).json(tasks);
  } catch (e) {
    res.status(500).json({ error: e, message: 'Something went wrong' });
  }
};

// Remove task by id.
const removeTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const toDeleteId = Number(id);
    // TODO: Validate that the task exists
    tasks = tasks.filter((task) => task.id !== id);
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { addTask, getAllTasks, removeTaskById };
