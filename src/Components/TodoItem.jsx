import React from "react";
import { MdAutoDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container ">
      <div className="row todoRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            onClick={() => onDeleteClick(todoName)}
            type="button"
            className="btn btn-danger todoButton"
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
