import React from 'react';
import MyFirstTab from './MyFirstTab';
import {staticTabs as tabs} from '../../constants/staticTabs';

class Tabs extends React.Component {
  constructor(props) {
  	super(props);  
	
	this.state = { 
		selected: this.props.selected,
		spaceId: this.props.spaceId,
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
					({id: user.sys.id, name: user.fields.name}
						));
		    	
				this.setState({
				users: userIdNames,
				});
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
				console.log(spaces);
				this.setState({
					spaces: spaces,
					selected: id,
				});
			});
		});
		this.loadUsersData();
	}

	renderTitles(selected, handleClick) {
		return tabs.map(function(tab, idx) {
			const handler = handleClick.bind(this, tab.id);
			let activeClass = (selected === tab.id ? 'is-active' : '');
			return (
				<li role="tab" key={tab.id}>
					<button className={activeClass}  onClick={handler}>
						{tab.name}
					</button>
				</li>
			);
		});
	}

	render() {
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