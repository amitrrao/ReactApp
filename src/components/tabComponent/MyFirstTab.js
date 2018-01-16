import React, {Component} from 'react';

export default class MyFirstTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabShowing: 'sensors',
			sensorData: [{
				name: 'sensor 1',
				data: 'Some data',
			}],
			beaconData: [{
				name: 'beacon 1',
				data: 'beacon data',
			}],
		};	
		
		this.loadSensorsData = this.loadSensorsData.bind(this);
		this.loadBeaconData = this.loadBeaconData.bind(this);
	}
	
	loadSensorsData() {
		this.setState({
			tabShowing: 'sensors',
		});
	}
	
	loadBeaconData() {
		this.setState({
			tabShowing: 'beacon',
		});
	}
	
	render() {
		const dataToRender = this.state.tabShowing === 'sensors' ? this.state.sensorData : this.state.beaconData;
		const renderedData = dataToRender.map((sensor) => {
			return (
				<tr>
					<td>{sensor.name}</td>
					<td>{sensor.data}</td>
				</tr>
			);
		});
		return (
			<div>
				<header>
					<button onClick={this.loadSensorsData}>Sensors</button>
					<button onClick={this.loadBeaconData}>Beacon</button>
				</header>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{renderedData}
					</tbody>
				</table>
			</div>	
		);
	}
}