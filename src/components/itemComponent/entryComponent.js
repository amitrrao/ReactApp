import React from 'react';

/*
	This is our Entry component which defines the fields for an Entry.
*/
export default class Entry extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.entry.fields.title}</td>
				<td>{this.props.entry.sys.id}</td>
				<td>{this.props.entry.sys.createdBy}</td>
				<td>{this.props.entry.sys.updatedBy}</td>
				<td>{this.props.entry.sys.updatedAt}</td>
			</tr>
		)
	}
}

// Set the default props to be an empty object.
Entry.defaultProps = {
	entries: {
		fields: {},
		sys: {},
	},
};