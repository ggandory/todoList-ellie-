import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  return (
    <li>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">{Todo.text}</label>
      <butoon>
        <FaTrashAlt />
      </butoon>
    </li>
  );
}
