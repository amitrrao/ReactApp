import React, {Component} from 'react';
import EntryList from '../itemComponent/entryListComponent';
import AssetList from '../itemComponent/assetListComponent';

export default class MyFirstTab extends Component {
	constructor(props) {
		super(props);
		this.state = {

			activeTab: 'entries',
			entries:[],
			assets: [],
		};	
		
		this.loadEntriesData = this.loadEntriesData.bind(this);
		this.loadAssetsData = this.loadAssetsData.bind(this);
	}

	componentDidMount() {
		this.fetchEntryData();
	}

	// Fetch methods that call the REST API

	fetchSpaceData() {
		fetch('/spaces/yadj1kx9rmg0/').then(response => {
			response.json().then(spaces => {
				this.setState({
					spaces: spaces,
				});
			});
		});
	}

	fetchEntryData() {
		fetch('/spaces/yadj1kx9rmg0/entries').then(response => {
			response.json().then(entries => {
				this.setState({
				activeTab: 'entries', 
				entries: entries,
				});
			});
		});
	}

	fetchAssetData() {
		fetch('/spaces/yadj1kx9rmg0/assets').then(response => {
			response.json().then(assets => {
				this.setState({
				activeTab: 'assets', 
				assets: assets,
				});
			});
		});
	}

	// Load methods that calls the fetch method().

	loadSpacesData() {
		this.fetchSpaceData();
	}

	loadEntriesData() {
		this.fetchEntryData();
	}

	loadAssetsData() {
		this.fetchAssetData();
	}

	fetchUserData() {
		fetch('/users/4FLrUHftHW3v2BLi9fzfjU').then(response => {
			response.json().then(user => {
				this.setState({
				user: user,
				});
			});
		});
	}

	loadUserData() {
		this.fetchUserData();
	}

	renderData() {
		if (this.state.activeTab === 'entries'){
			return (<EntryList entries={this.state.entries} />);
		}
		if (this.state.activeTab === 'assets') {
			return (<AssetList assets={this.state.assets} />);
		} 
	}
	
	render() {
		return (
			<div>
				<div>
					<h1>{this.props.spaces.fields.title}</h1>created by {this.props.spaces.sys.createdBy}
				</div>
				<header>
					<button onClick={this.loadEntriesData}>Entries</button>
					<button onClick={this.loadAssetsData}>Assets</button>
				</header>
				{this.renderData()}
			</div>	
		);
	}
}