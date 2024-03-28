import { Fragment, useState } from "react";

export default function Challenge2() {
  const [reverse, setReverse] = useState(true);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <div>
        <Field key="firstName" label="First name" />
        <Field key="lastName" label="Last name" />
        {checkbox}
      </div>
    );
  } else {
    return (
      <div>
        <Field key="lastName" label="Last name" />
        <Field key="firstName" label="First name" />
        {checkbox}
      </div>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
