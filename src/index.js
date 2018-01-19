import React from 'react';
import ReactDOM from 'react-dom';
//import {App, tabs} from './components/tabComponent/tabComponent'
import {App} from './components/tabComponent/tabComponent'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App tabs={tabs}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
