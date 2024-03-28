import React, { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function reducer(state, action) {
  console.log('state', state)
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    
    case "delete":
      return state.filter(t => t.id !== action.payload.id) 
    
    case "edit":
      return state.map(item => item.id === action.payload.id ? action.payload : item)
  
    default:
      throw new Error("Unkonwn action type");
  }
}

export default function TaskApp() {
  const [state, dispatch] = useReducer(reducer, initialTasks);
  console.log('state', state)

  function handleAddTask(task) {
    dispatch({
      type: "add",
      payload: {
        id: nextId++,
        text: task,
      }
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      payload: {
        id: taskId
      }
    })
  }

  function handleEditTask(task) {
    console.log('task', task)
    dispatch({
      type: "edit",
      payload: task
    })
  }

  return (
    <div>
      <h1>Prague itinerary</h1>

      <TaskList
        tasks={state}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />

      <AddTask
        onAddTask={handleAddTask}
      />
    </div>
  );
}
