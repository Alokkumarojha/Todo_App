import "./App.css";
import TodoItems from "./Components/TodoItems";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

function App() {
  const todoItem = [
    {
      Name: "Buy Milk",
      Date: "24/08/2024",
    },
    {
      Name: "Go to collage",
      Date: "24/08/2024",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItem}></TodoItems>
      </center>
    </>
  );
}

export default App;
