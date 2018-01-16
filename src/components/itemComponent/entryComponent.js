import React from 'react';

export default class Entry extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.entity.items.fields.title}</td>
				<td>{this.props.entity.items.fields.summary}</td>
				<td>{this.props.entity.items.sys.createdBy}</td>
				<td>{this.props.entity.items.sys.updatedBy}</td>
				<td>{this.props.entity.items.sys.updatedAt}</td>
			</tr>
		)
	}
}