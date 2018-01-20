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
			errorState: false,
		};	
		
		this.loadEntriesData = this.loadEntriesData.bind(this);
		this.loadAssetsData = this.loadAssetsData.bind(this);
	}

	componentDidMount() {
		this.fetchEntryData();
	}

	fetchEntryData() {
		fetch('/spaces/yadj1kx9rmg0/entries').then(response => {
			response.json().then(entries => {
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
		fetch('/spaces/yadj1kx9rmg0/assets').then(response => {
			response.json().then(assets => {
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
		return (
			<div>
				<div>
					<h1>{this.props.spaces.fields.title}</h1> {this.props.spaces.sys.createdBy}
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