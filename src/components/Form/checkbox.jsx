import React, { useState } from "react";

function Checkbox({ name, checked, onChange }) {
  return (
    <div>
      <span>{name}</span>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  );
}

export default function CheckboxApp() {
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    console.log("e", gender);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Checkbox
          name="Male"
          checked={gender === "male"}
          onChange={() => setGender("male")}
          value={gender}
        />

        <Checkbox
          name="Female"
          checked={gender === "female"}
          onChange={() => setGender("female")}
          value={gender}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
