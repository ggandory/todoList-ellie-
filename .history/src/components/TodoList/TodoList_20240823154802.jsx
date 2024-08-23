import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo"; //AddTodo 컴포넌트를 임포트 해줘야 한다.
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
