import React from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChage = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: "고유한값", text, status: "active" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChage}
      />
      <button>Add</button>
    </form>
  );
}
