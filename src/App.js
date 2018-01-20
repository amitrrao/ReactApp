import React, { Component } from 'react';
import Tabs from './components/tabComponent/tabs';

export const App = (props) => {
  return (
    <Tabs selected={props.firstSelect || '1'} />
  );
}

export default App;
