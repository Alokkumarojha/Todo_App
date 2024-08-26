import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import AddTodo1 from "./Components/AddTodo1";
import AddTodo2 from "./Components/AddTodo2";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
        <div className="items-container">
          <AddTodo1></AddTodo1>
          <AddTodo2></AddTodo2>
        </div>
      </center>
    </>
  );
}

export default App;
