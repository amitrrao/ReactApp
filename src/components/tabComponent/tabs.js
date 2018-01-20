import React from 'react';
import MyFirstTab from './MyFirstTab';
import {staticTabs as tabs} from '../../constants/staticTabs';

class Tabs extends React.Component {
  constructor(props) {
	super(props);  

	this.state = { 
		selected: this.props.selected,
		spaces: {
			fields: {},
			sys: {},
	 	},
	};

	this.handleClick = this.handleClick.bind(this);
  }

	handleClick(id, event) {
		event.preventDefault();
		fetch("/spaces/yadj1kx9rmg0" + id).then(response => {
			response.json().then(spaces => {
				console.log(spaces);
				this.setState({
					spaces: spaces,
					selected: id,
				});
			});
		});
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
					<MyFirstTab spaces={this.state.spaces}/>
				</div>
			</div>
		);
	}
}

export default Tabs;