import React, { Fragment, useState } from "react";

export default function AddTask({onAddTask}) {

  const [task, setTask] = useState("");

  return (
    <Fragment>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        type="button"
        onClick={() => {
          setTask('')
          onAddTask(task)
        }}
      >
        Add
      </button>
    </Fragment>
  );
}
