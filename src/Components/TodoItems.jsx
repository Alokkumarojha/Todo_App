import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem
          key={items.Name}
          todoDate={items.Date}
          todoName={items.Name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
