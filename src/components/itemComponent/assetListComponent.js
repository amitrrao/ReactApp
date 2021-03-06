import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

/*
	This is the AssetList component which defines a table with column headers.
*/
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