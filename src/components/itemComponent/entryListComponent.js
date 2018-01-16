import React from 'react';
import Entry from './entryComponent';

export default class EntryList extends React.Component{
	render() {
		var entries = this.props.entries.map(entry =>
			<Entry key={entry._links.self.href} entry={entry}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Summary</th>
						<th>CreatedBy</th>
						<th>UpdatedBy</th>
						<th>UpdatedAt</th>
					</tr>
					{entries}
				</tbody>
			</table>
		)
	}
}