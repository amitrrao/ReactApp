import React from 'react';
import Spaces from './components/tabComponent/spaces';

/*
	This is our main App component. 
	In the render() method, we call the 'Spaces' component by passing in two props - the space
	that needs to be selected first and the spaceId parameter from the Url.
*/
export const App = (props) => {
	return (
		<Spaces selected={props.firstSelect || ''} spaceId={props.match.params.spaceId} />
	);
}

export default App;