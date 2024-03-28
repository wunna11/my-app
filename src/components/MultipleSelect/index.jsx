import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter";

export default function MultipleSelect() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length

  function handleToggle(toggledId) {
    if (selectedIds.includes(toggledId)) {
      // remove id
      const filterId = selectedIds.filter(id => id !== toggledId)
      setSelectedIds(filterId)

    } else {
      // TODO: allow multiple selection
      setSelectedIds([
        ...selectedIds,
        toggledId
      ]);
    }
  }

  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
             selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </div>
  );
}
