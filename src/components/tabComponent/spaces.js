import React from 'react';
import MySpace from './mySpace';
import {staticSpaces as spaces} from '../../constants/staticSpaces';

/*
	This is our main 'Spaces' component. This component loads a list of spaces on initialization.
	In its render() method, it first calls the renderTitles() method by passing it an initial 
	selected Space and a handleClick() callback method. It then calls the MyFirstTab component by
	passing it a list of spaces, users and a spaceId as props.
*/

class Spaces extends React.Component {
	constructor(props) {
	super(props);
	
	this.state = { 
		selected: this.props.selected,
		spaceId: this.props.spaceId,
		errorState: false,
		spaces: {
			fields: {},
			sys: {},
		},
		users: [{
			id: '',
			name: '',
		}],
	};

	this.handleClick = this.handleClick.bind(this);
	this.loadUsersData = this.loadUsersData.bind(this);
	}

	loadUsersData() {
		this.fetchUserData();
	}

	fetchUserData() {
		fetch('/users').then(response => {
			response.json().then(users => {

				var userIdNames = users.map(user => 
					({
						id: user.sys.id, 
						name: user.fields.name
					}));	
				this.setState({
					users: userIdNames,
				});
			}).catch(() => {
				this.setState({
					errorState: true,
				})
			});
		});
	}

	handleClick(id, event) {
		event.preventDefault();
		let fetchUrl = "/spaces/yadj1kx9rmg0";
		if(this.state.spaceId) {
			fetchUrl = "/spaces/" + this.state.spaceId;
		}
		fetch(fetchUrl).then(response => {
			response.json().then(spaces => {
				this.setState({
					spaces: spaces,
					selected: id,
				});
			});
		}).catch(() => {
			this.setState({
				errorState: true,
			})
		});
		this.loadUsersData();
	}

	renderTitles(selected, handleClick) {
		return spaces.map(function(space, idx) {
			const handler = handleClick.bind(this, space.id);
			let activeClass = (selected === space.id ? 'is-active' : '');
			return (
				<li role="space" key={space.id}>
					<button className={activeClass} onClick={handler}>
						{space.name}
					</button>
				</li>
			);
		});
	}

	render() {
		if (this.state.errorState) {
			return (<div>Space is not available. Please make sure the server is running.</div>);
		}
		return (
			<div className="tabs">
				<ul className="tabs-labels" role="tablist">
					{this.renderTitles(this.state.selected, this.handleClick)}
				</ul>       
				<div className="tabs-content">
					<MySpace spaces={this.state.spaces} users={this.state.users} spaceId={this.state.spaceId}/>
				</div>
			</div>
		);
	}
}

export default Spaces;