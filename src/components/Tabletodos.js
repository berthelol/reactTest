import React from 'react'
import { actions } from '../reduce/reducer'

const Tabletodos = ({ store }) =>
  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Todo</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {store.complete.map((e, i) => {
          return (
            <tr key={`line-${i}`}>
              <td className="align-middle">{store.todos[i]}</td>
              <td className="align-middle" >
                <button 
                  onClick={() => actions.updateTodo(i)}
                  className="btn btn-outline-secondary"
                  type="button">
                  Change status
                </button>
              </td>
              <td className="align-middle" >
                <button 
                  onClick={() => actions.removeTodo(i)}
                  className="btn btn-outline-secondary"
                  type="button">
                  Remove
                </button>
              </td>
              <td className="align-middle" >{e ? 'Completed' : 'No completed'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>

  export default Tabletodos