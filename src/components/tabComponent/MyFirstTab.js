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
			users: [],
			errorState: false,
		};	
		
		this.loadEntriesData = this.loadEntriesData.bind(this);
		this.loadAssetsData = this.loadAssetsData.bind(this);
	}

	componentDidMount() {
		this.fetchEntryData();
	}

	fetchEntryData() {
		let allUsers = this.props.users;
		fetch('/spaces/yadj1kx9rmg0/entries').then(response => {
			response.json().then(entries => {

				entries.map(function(entry) {

					if (allUsers) {
						let createdUserNameList = allUsers.filter(function(user) {return user.id === entry.sys.createdBy});
						if (createdUserNameList.length === 1){
							entry.sys.createdBy = createdUserNameList[0].name;
						}

						let updatedUserNameList = allUsers.filter(function(user) {return user.id === entry.sys.updatedBy});
						if (updatedUserNameList.length === 1){
							entry.sys.updatedBy = updatedUserNameList[0].name;
						}
					}
					return entry;
				});

				this.setState({
				activeTab: 'entries', 
				entries: entries,
				});
			});
		}).catch(() => {
			this.setState({
				errorState: true,
	        })
			console.log("error");
    	});
	}

	loadEntriesData() {
		this.fetchEntryData();
	}

	fetchAssetData() {
		let allUsers = this.props.users;
		fetch('/spaces/yadj1kx9rmg0/assets').then(response => {
			response.json().then(assets => {

				assets.map(function(asset) {
					if (allUsers) {
						let createdUserNameList = allUsers.filter(function(user) {return user.id === asset.sys.createdBy});
						if (createdUserNameList.length === 1){
							asset.sys.createdBy = createdUserNameList[0].name;
						}
						let updatedUserNameList = allUsers.filter(function(user) {return user.id === asset.sys.updatedBy});
						if (updatedUserNameList.length === 1){
							asset.sys.updatedBy = updatedUserNameList[0].name;
						}
					}
					return asset;
				});

				this.setState({
				activeTab: 'assets', 
				assets: assets,
				});
			});
		});
	}

	loadAssetsData() {
		this.fetchAssetData();
	}

	renderData() {
		if (this.state.errorState) {
			return (<div>Space not setup yet!</div>);
		}
		if (this.state.activeTab === 'entries'){
			return (<EntryList entries={this.state.entries} />);
		}
		if (this.state.activeTab === 'assets') {
			return (<AssetList assets={this.state.assets} />);
		} 
	}

	render() {
		let userName = '';
		if (this.props.users) {
			let userId = this.props.spaces.sys.createdBy;
			let userNameList = this.props.users.filter(function(user) {return user.id === userId});
			if (userNameList.length === 1){
				userName = userNameList[0].name;
			}
		}

		return (
			<div>
				<div>
					<h1>{this.props.spaces.fields.title}</h1> created by {userName}
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