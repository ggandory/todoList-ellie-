import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

//new todo list start
const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
