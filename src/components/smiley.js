import React, { Component } from 'react';

class Smiley extends Component {

  render() {
    return <img className="smileys" src="/happy.png"/>
  }

}

const styles = {
  image:{
    width: 30,
    height: 30
  }
};

export default Smiley;
