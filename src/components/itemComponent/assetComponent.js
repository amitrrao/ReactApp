import React from 'react';

export default class Asset extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.asset.fields.title}</td>
				<td>{this.props.asset.fields.contentType}</td>
				<td>{this.props.asset.fields.fileName}</td>
				<td>{this.props.asset.sys.createdBy}</td>
				<td>{this.props.asset.sys.updatedBy}</td>
				<td>{this.props.asset.sys.updatedAt}</td>
			</tr>
		)
	}
}

Asset.defaultProps = {
	assets: {
		fields: {},
		sys: {},
	},
};