import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import MyCustomTabs from './components/myTabs/myCustomTabs';
import Tabs from './components/myTabs/tabs';
import Tab from './components/myTabs/tab';

class App extends Component {
  render() {
	  this.props.selected
    return (
      <div className="App">
        <Header />
		<MyBasicTabs />
		<Tabs />
		<Tab />
      </div>
    );
  }
}

export default App;
