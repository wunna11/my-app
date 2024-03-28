import { useState } from "react";

function Input(props) {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("value", !isEditing);
    setIsEditing(!isEditing);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{" "}
        {isEditing ? (
          <Input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <Input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edit"}</button>
      <p>
        <i>
          {firstName} {lastName}
        </i>
      </p>
    </form>
  );
}
