import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BudgetTable extends React.Component {
	constructor(props) {
	   super(props);

	   this.options = {
	     defaultSortName: 'category',
	     defaultSortOrder: 'asc',
	   };
	 }

	render() {
		const budget = this.props.budget;
		// const selectRow = {
		// 	mode: 'checkbox',
		// 	clickToSelect: true,
		// 	bgColor: 'rgba(18,84,181,.4)'
		//  };

		return (
			<div className="component-container narrow-table">
			{/* remove narrow table to get full page width table */}
				<div className="title-box">
					Budget
				</div>
				<BootstrapTable
					data={budget}
					options={this.options}
					hover={true}
					bordered={false}
					tableHeaderClass='swimo-table-header'
					tableBodyClass='swimo-table-body'
					tableStyle={{margin: 0}}>

		      <TableHeaderColumn
			      dataSort={true}
			      isKey={true}
						headerAlign='left'
						dataAlign='left'
						width='20%'
						dataField='enveloppe'>
							Enveloppe
					</TableHeaderColumn>
		      <TableHeaderColumn
			      dataSort={true}
			      width='30%'
						headerAlign='left'
						dataAlign='left'
						dataField='engaged'>
							Engagé
					</TableHeaderColumn>
		      <TableHeaderColumn
			      dataSort={true}
						width='20%'
						headerAlign='right'
						dataAlign='right'
						dataField='restant'>
							Restant
					</TableHeaderColumn>
			  </BootstrapTable>
			</div>
		);
	}
}

export default BudgetTable;
