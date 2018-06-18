import React from 'react'
import Tabletodos from './Tabletodos'
import Formtodos from './Formtodos'
import { store } from '../reduce/reducer'

class Maintodos extends React.Component {
  constructor() {
    super()

    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <React.Fragment>
        <Formtodos />
        <Tabletodos store={this.state}/>
      </React.Fragment>
    )
  }
}

export default Maintodos