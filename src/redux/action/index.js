import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actionTypes/";

/**
 * Add todo
 * @param {Object} todo - todo to add.
 */
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

/**
 * Remove Todo
 * @param {String} id - id of todo to be removed.
 */
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}

/**
 * Update Todo
 * @param {String} id - id of todo to be updated.
 */
export function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    payload: id
  };
}
