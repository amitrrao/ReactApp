import React from 'react';
import Entry from './entryComponent';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class AssetList extends React.Component{
	render() {

		const assetColumns = [{
		    Header: 'Title',
		    accessor: 'fields.title'
		  }, {
		    Header: 'Content Type',
		    accessor: 'fields.contentType',
		  }, {
		    Header: 'File Name',
		    accessor: 'fields.fileName'
		  },
		  {
		    Header: 'Created By',
		    accessor: 'sys.createdBy'
		  }, 
		  {
		    Header: 'Updated By',
		    accessor: 'sys.updatedBy'
		  }, {
		    Header: 'Last Updated',
		    accessor: 'sys.updatedAt'
		  }]

		return (
			<ReactTable
			    data={this.props.assets}
			    columns={assetColumns}
			    minRows={1}
			    sortable={true}
		  	/>

		)
	}
}