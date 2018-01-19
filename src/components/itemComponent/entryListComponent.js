import React from 'react';
import Entry from './entryComponent';

export default class EntryList extends React.Component{
	render() {
		var entries = this.props.entries.map(entry =>	
			<Entry entry={entry}/>
		);
		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Id</th>
						<th>CreatedBy</th>
						<th>UpdatedBy</th>
						<th>LastUpdated</th>
					</tr>
				</thead>
				<tbody>
					{entries}
				</tbody>
			</table>
		)
	}
}