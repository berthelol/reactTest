import React, { Component } from 'react';
import Smiley from './components/smiley';

import './App.css';

class App extends Component {

  render() {
    return (
      <div style={styles.testContainer} >
        <Smiley />
        <p style={styles.test}> GOOD LUCK </p>
        <Smiley />
      </div>
    );
  }

}

const styles = {
  testContainer:{
    textAlign: 'center'
  },
  test:{
    padding: 50
  }
};

export default App;
