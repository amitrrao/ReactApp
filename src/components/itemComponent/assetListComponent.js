import React from 'react';
import Asset from './assetComponent';

export default class AssetList extends React.Component{
	render() {
		var assets = this.props.assets.map(asset =>	
			<Asset asset={asset}/>
		);
		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>ContentType</th>
						<th>FileName</th>
						<th>CreatedBy</th>
						<th>UpdatedBy</th>
						<th>LastUpdated</th>
					</tr>
				</thead>
				<tbody>
					{assets}
				</tbody>
			</table>
		)
	}
}