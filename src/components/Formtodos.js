import React from 'react'
import { actions } from '../reduce/reducer'

const Formtodos = () =>
  <div>
    <div className="input-group mb-3">
      <input id="input-todo" type="text" className="form-control" placeholder="New todo" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button 
            onClick={() => actions.addTodo(document.getElementById('input-todo').value)}
            className="btn btn-outline-secondary" 
            type="button">
            ADD
          </button>
        </div>
    </div>
  </div>

export default Formtodos