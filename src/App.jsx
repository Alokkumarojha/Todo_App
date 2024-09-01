import "./App.css";
import TodoItems from "./Components/TodoItems";
import AddTodo from "./Components/AddTodo";
import WellcomMessage from "./Components/WellcomMessage";
import AppName from "./Components/AppName";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [...todoItem, { Name: itemName, Date: itemDueDate }];
    setTodoItem(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItem.filter((items) => items.Name !== todoItemName);
    setTodoItem(newTodoItem);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItem.length === 0 && <WellcomMessage></WellcomMessage>}
        <TodoItems
          todoItems={todoItem}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
