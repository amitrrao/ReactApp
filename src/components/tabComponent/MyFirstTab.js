import React, {Component} from 'react';
import EntryList from '../itemComponent/entryListComponent';

export default class MyFirstTab extends Component {
	constructor(props) {
		super(props);
		this.state = {

			activeTab: 'entries',
			entries:[],
			beacons: [],
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
		
		this.loadSensorsData = this.loadSensorsData.bind(this);
		this.loadBeaconData = this.loadBeaconData.bind(this);
	}

	componentDidMount() {
		this.fetchEntryData();
	}

	fetchEntryData() {
		fetch('localhost:4000/spaces/yadj1kx9rmg0/entries').then(response => {
			this.setState({
				activeTab: 'entries', 
				entries: response.json(),
			});
		});
	}

	loadSensorsData() {
		this.fetchEntryData();
	}

	loadBeaconData() {
		this.setState({
			activeTab: 'beacon',
		});
	}

	renderData() {
		if (this.state.activeTab === 'entries'){
			return (<EntryList entries={this.state.entries} />);
		}
		// return (<BeaconList beacons={this.state.beacons}); 
	}
	
	render() {
		return (
			<div>
				<header>
					<button onClick={this.loadSensorsData}>Entries</button>
					<button onClick={this.loadBeaconData}>Beacon</button>
				</header>
				{this.renderData()}
			</div>	
		);
	}
}

	// loadSensorsData() {
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
	// 				<button onClick={this.loadSensorsData}>Sensors</button>
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