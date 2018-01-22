import React from 'react';
import Tabs from './components/tabComponent/tabs';

/*
	This is our main App component. 
	In the render() method, we call the 'Tabs' component by passing in two props - the space
	that needs to be selected first and the spaceId parameter from the Url.
*/
export const App = (props) => {
	return (
		<Tabs selected={props.firstSelect || ''} spaceId={props.match.params.spaceId} />
	);
}

export default App;