import React from 'react';

//Components
import Tabletodos from './Tabletodos';
import Formtodos from './Formtodos';

class Maintodos extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Formtodos />
        <Tabletodos />
      </React.Fragment>
    )
  }
}

export default Maintodos