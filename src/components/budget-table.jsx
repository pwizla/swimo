import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BudgetTable extends React.Component {
	// constructor(props) {
	//    super(props);

	//    this.options = {
	//      defaultSortName: 'category',
	//      defaultSortOrder: 'desc',
	//    };
	//  }

	render() {
		const flatBudget = this.props.flatBudget;

		return (
			<div className="component-container budget-table">
			{/* remove narrow table to get full page width table */}
				<div className="title-box">
					Budget
				</div>
				<BootstrapTable
					data={flatBudget}
					options={this.options}
					hover={true}
					bordered={false}
					tableHeaderClass='budget-table-header'
					tableBodyClass='budget-table-body'
					tableStyle={{margin: 0}}>

		      <TableHeaderColumn
			      dataSort={true}
			      isKey={true}
						headerAlign='left'
						dataAlign='left'
						width='30%'
						dataField='category'>
							Catégorie
					</TableHeaderColumn>
		      <TableHeaderColumn
			      dataSort={true}
			      width='30%'
						headerAlign='left'
						dataAlign='right'
						dataField='enveloppe'>
							Enveloppe
					</TableHeaderColumn>
					<TableHeaderColumn
			      dataSort={true}
			      width='20%'
						headerAlign='left'
						dataAlign='right'
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
