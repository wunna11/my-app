import { useState } from 'react';

export default function ShareState() {

  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </div>
  );
}

function Input({ label, value, onChange }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
