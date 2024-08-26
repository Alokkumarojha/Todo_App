import React from "react";

const AddTodo1 = () => {
  let todoName = "Buy Milk";
  let todoDate = "24/08/2024";
  return (
    <div className="container ">
      <div className="row todoRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todoButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo1;
