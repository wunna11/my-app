import React, { Fragment, useState } from "react";

export default function TaskList({ tasks, onDelete, onEdit }) {
  
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = (id) => {
    setIsEdit(true, id)
  }

  return (
    <Fragment>
      <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {isEdit ? (
            <Fragment>
            <input
                type="text"
                value={task.text}
                onChange={e => {
                  onEdit({
                    ...task,
                    text: e.target.value
                  });
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setIsEdit(false)
                }}
              >
                Save
              </button>
            </Fragment>
          ) : (
              <Fragment>
                {task.text}
                <button type="button"
                  onClick={() => editHandler(task.id)}>
                  Edit
                </button>
              </Fragment>
          )}
      
          <button type="button" onClick={() => onDelete(task.id) }>
            Delete
          </button>
        </li>
      ))}
      </ul>
    </Fragment>
  );
}
