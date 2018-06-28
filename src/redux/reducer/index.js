//Types
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actionTypes/";
//Utils
import _ from "lodash";

const INITIAL_STATE = {
  todos: [
    {
      value: "toto",
      complete: false
    }
  ]
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: _.filter(state.todos, todo => {
          return todo !== action.payload;
        })
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: _.map(state.todos, todo => {
          if (todo.value === action.payload.value) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      };

    default:
      return state;
  }
};

export default todoReducer;
