import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Redirect, BrowserRouter, Route} from 'react-router-dom';

registerServiceWorker();

ReactDOM.render((

	<BrowserRouter>
		<div>
			<Route exact path="/spaceexplorer" component={App}/>
			<Route exact path="/spaceexplorer/:spaceId" component={App}/>
			<Redirect from="/"  to="/spaceexplorer"/>
		</div>
	</BrowserRouter>
), document.getElementById( 'root' ) );