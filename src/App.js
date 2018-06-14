import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={styles.test}> 😤 GOOD LUCK 😤 </p>
      </div>
    );
  }
}

const styles = {
  test:{
    paddingTop: 50
  }
};

export default App;
