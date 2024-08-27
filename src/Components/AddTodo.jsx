import React from "react";
import styles from "./AddTodo.module.css";

const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row todoRow">
        <div className="col-6">
          <input
            className={styles.inputContainer}
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input className={styles.inputContainer} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todoButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
