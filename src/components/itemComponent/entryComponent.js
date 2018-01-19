import React from 'react';

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

Entry.defaultProps = {
	entries: {
		fields: {},
		sys: {},
	},
};