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
			// tabShowing: 'sensors',
			// sensorData: [{
			// 	name: 'sensor 1',
			// 	data: 'Some data',
			// }],
			// beaconData: [{
			// 	name: 'beacon 1',
			// 	data: 'beacon data',
			// }],
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
		// this.setState({
		// 	activeTab: 'assets',
		// });
		this.fetchAssetData();
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
				<h1> My First Space</h1>
				<header>
					<button onClick={this.loadEntriesData}>Entries</button>
					<button onClick={this.loadAssetsData}>Assets</button>
				</header>
				{this.renderData()}
			</div>	
		);
	}
}

	// loadEntriesData() {
	// 	this.setState({
	// 		tabShowing: 'entries',
	// 	});
	// }
	
	// loadBeaconData() {
	// 	this.setState({
	// 		tabShowing: 'beacon',
	// 	});
	// }
	
	// render() {
	// 	const dataToRender = this.state.tabShowing === 'entries' ? this.state.sensorData : this.state.beaconData;
	// 	const renderedData = dataToRender.map((sensor) => {
	// 		return (
	// 			<tr>
	// 				<td>{sensor.name}</td>
	// 				<td>{sensor.data}</td>
	// 			</tr>
	// 		);
	// 	});
	// 	return (
	// 		<div>
	// 			<header>
	// 				<button onClick={this.loadEntriesData}>Sensors</button>
	// 				<button onClick={this.loadBeaconData}>Beacon</button>
	// 			</header>
	// 			<table>
	// 				<thead>
	// 					<tr>
	// 						<th>Name</th>
	// 						<th>Data</th>
	// 					</tr>
	// 				</thead>
	// 				<tbody>
	// 					{renderedData}
	// 				</tbody>
	// 			</table>
	// 		</div>	
	// 	);
	// }
// }
