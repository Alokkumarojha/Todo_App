import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { RiApps2AddFill } from "react-icons/ri";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row todoRow">
        <div className="col-6">
          <input
            onChange={handleNameChange}
            value={todoName}
            className={styles.inputContainer}
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input
            onChange={handleDateChange}
            value={todoDate}
            className={styles.inputContainer}
            type="date"
          />
        </div>
        <div className="col-2">
          <button
            onClick={handleOnButtonClick}
            type="button"
            className="btn btn-success todoButton"
          >
            <RiApps2AddFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
