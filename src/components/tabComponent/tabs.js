import React from 'react';
import MyFirstTab from './MyFirstTab';
import {staticTabs as tabs} from '../../constants/staticTabs';

/*
	This is our main 'Tabs' component. This component loads a list of spaces on initialization.
	In its render() method, it first calls the renderTitles() method by passing it an initial 
	selected Tab and a handleClick() callback method. It then calls the MyFirstTab component by
	passing it a list of spaces, users and a spaceId as props.
*/

class Tabs extends React.Component {
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
		return tabs.map(function(tab, idx) {
			const handler = handleClick.bind(this, tab.id);
			let activeClass = (selected === tab.id ? 'is-active' : '');
			return (
				<li role="tab" key={tab.id}>
					<button className={activeClass} onClick={handler}>
						{tab.name}
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
					<MyFirstTab spaces={this.state.spaces} users={this.state.users} spaceId={this.state.spaceId}/>
				</div>
			</div>
		);
	}
}

export default Tabs;