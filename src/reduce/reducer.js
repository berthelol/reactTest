import { createStore } from 'redux'

const initialState = {
  todos: ['ligne', 'input', 'a', 'b', 'c', 'd'],
  complete: [false, true, false, false, false, false]
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_TODO':
      return {
        ...state, todos: [...state.todos, actions.todo],
        complete: [...state.complete, false]
      }
    case 'REMOVE_TODO':
      state.todos.splice(actions.index, 1)
      state.complete.splice(actions.index, 1)
      return {...state}
    case 'UPDATE_TODO':
      state.complete[actions.index] = !state.complete[actions.index]
      return {...state}
    default:
      return state
  }
  console.log(store.getState())
}

export const actions = {
  addTodo: (todo) => store.dispatch({ type: 'ADD_TODO', todo: todo }),
  removeTodo: (id) => store.dispatch({ type: 'REMOVE_TODO', index: id }),
  updateTodo: (id) => store.dispatch({ type: 'UPDATE_TODO', index: id })
}

export const store = createStore(reducer)