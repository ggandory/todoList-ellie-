import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  return (
    <li>
      <input type="checkbox" id="checkbox" checked={status === "completed"} />
      <label htmlFor="checkbox">{text}</label>
      <butoon>
        <FaTrashAlt />
      </butoon>
    </li>
  );
}
