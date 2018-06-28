import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import { updateTodo, removeTodo } from "../redux/action/";
//Utils
import _ from "lodash";
//Component
import Todo from "./Todo";

class Tabletodos extends React.Component {
  renderTodo(todo, index) {
    const { updateTodo, removeTodo } = this.props;
    return (
      <Todo key={index} todo={todo} update={updateTodo} remove={removeTodo} />
    );
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Todo</th>
              <th scope="col" />
              <th scope="col" />
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{_.map(todos, this.renderTodo.bind(this))}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  };
}

Tabletodos.propTypes= {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      complete: PropTypes.bool
    })
  ),
  update: PropTypes.func,
  remove: PropTypes.func
}

export default connect(
  mapStateToProps,
  { updateTodo, removeTodo }
)(Tabletodos);
