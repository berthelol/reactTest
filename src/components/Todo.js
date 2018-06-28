import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, update, remove }) => {
  return (
    <tr>
      <td className="align-middle">{todo.value}</td>
      <td className="align-middle">
        <button
          onClick={() => update(todo)}
          className="btn btn-outline-secondary"
          type="button"
        >
          Change status
        </button>
      </td>
      <td className="align-middle">
        <button
          onClick={() => remove(todo)}
          className="btn btn-outline-secondary"
          type="button"
        >
          Remove
        </button>
      </td>
      <td className="align-middle">
        {todo.complete ? "Completed" : "No completed"}
      </td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string,
    complete: PropTypes.bool
  }),
  update: PropTypes.func,
  remove: PropTypes.func
};

export default Todo;
