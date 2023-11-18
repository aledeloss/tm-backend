const express = require('express');

let tasks = [
  {
    id: 1,
    description: 'Home test',
  },
];

// Returns all stored tasks.
const getAllTasks = async (req, res) => {
  res.status(200).json(tasks);
};

module.exports = { getAllTasks };
