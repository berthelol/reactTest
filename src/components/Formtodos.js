import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//Action
import { addTodo } from "../redux/action/";

class Formtodos extends React.Component {
  state = {
    newInput: ""
  };

  onChange(event) {
    const newInput = event.target.value;
    this.setState({ newInput });
  }

  addTodo(todo){
    this.props.addTodo(todo);
    //re set input to 
    this.setState({newInput: ''});
  }

  render() {
    const { newInput } = this.state;

    return (
      <div className="input-group mb-3">
        <input
          value={newInput}
          onChange={this.onChange.bind(this)}
          id="input-todo"
          type="text"
          className="form-control"
          placeholder="New todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={() => this.addTodo({ value: newInput, complete: false })}
            className="btn btn-outline-secondary"
            type="button"
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

Formtodos.propTypes= {
  addTodo: PropTypes.func
}

export default connect(
  null,
  { addTodo }
)(Formtodos);
