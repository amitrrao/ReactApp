import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

/*
	This is the EntryList component which defines a table with column headers.
*/
export default class EntryList extends React.Component{
	render() {

		const entryColumns = [{
		    Header: 'Title',
		    accessor: 'fields.title'
		  }, {
		    Header: 'Summary',
		    accessor: 'fields.summary',
		  }, {
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
			    data={this.props.entries}
			    columns={entryColumns}
			    minRows={1}
			    sortable={true}
		  	/>
		)
	}
}