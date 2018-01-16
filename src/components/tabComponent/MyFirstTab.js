import React, {Component} from 'react';

export default class MyFirstTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabShowing: 'entries',
			entryData: [{
				title: 'Hello World',
				description: 'Entry data',
				createdBy: 'Alanna Atlassian',
				updatedBy: 'Alanna Atlassian',
				lastUpdated: '5-18-2015',
			}],
			assetData: [{
				title: 'Asset 1',
				description: 'Asset data',
				createdBy: 'Alanna Atlassian',
				updatedBy: 'Alanna Atlassian',
				lastUpdated: '5-18-2015',
			}],
		};	
		
		this.loadEntriesData = this.loadEntriesData.bind(this);
		this.loadAssetsData = this.loadAssetsData.bind(this);
	}
	
	loadEntriesData() {
		this.setState({
			tabShowing: 'entries',
		});
	}
	
	loadAssetsData() {
		this.setState({
			tabShowing: 'asset',
		});
	}
	
	render() {
		const dataToRender = this.state.tabShowing === 'entries' ? this.state.entryData : this.state.assetData;
		const renderedData = dataToRender.map((entry) => {
			return (
				<tr>
					<td>{entry.title}</td>
					<td>{entry.description}</td>
					<td>{entry.createdBy}</td>
					<td>{entry.updatedBy}</td>
					<td>{entry.lastUpdated}</td>
				</tr>
			);
		});
		return (
			<div>
				<h1> My First Space</h1>
				<header>
					<button onClick={this.loadEntriesData}>Entries</button>
					<button onClick={this.loadAssetsData}>Assets</button>
				</header>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th>CreatedBy</th>
							<th>UpdatedBy</th>
							<th>LastUpdated</th>
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