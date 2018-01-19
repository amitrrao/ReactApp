import React, { Component } from 'react';
import Header from './components/headerComponent/header';

class App extends Component {
  render() {
	  this.props.selected
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
