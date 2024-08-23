import React from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChage}
      />
    </form>
  );
}
