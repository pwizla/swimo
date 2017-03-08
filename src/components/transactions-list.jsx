import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TransactionsList extends React.Component {

	_renderTransaction(transaction) {
		return (
			<tr>
				<td>{transaction.date}</td>
				<td>{transaction.description}</td>
				<td>{transaction.amount}</td>
			</tr>
		);
	}

	render() {
		const transactions = this.props.transactions;
		return (
			<div className="component-container narrow-table">
			{/* remove narrow table to get full page width table */}
				<div className="title-box">
					Liste des transactions
				</div>
				{this.props.transactions.length === 0 &&
					<div>
						Pas de transaction pour l'instant.
					</div>
				}
				{this.props.transactions.length > 0 &&
					<BootstrapTable
						data={transactions}
						hover={true}
						tableHeaderClass='swimo-table-header'
						tableBodyClass='swimo-table-body'
						tableStyle={{margin: 0}}>

			      <TableHeaderColumn
				      dataSort={true}
							headerAlign='left'
							dataAlign='left'
							width='20%'
							dataField='date'>
								Date
						</TableHeaderColumn>
			      <TableHeaderColumn
				      dataSort={true}
				      width='30%'
							headerAlign='left'
							dataAlign='left'
							dataField='description'>
								Description
						</TableHeaderColumn>
						<TableHeaderColumn
				      dataSort={true}
				      // editable={false}
				      width='30%'
							headerAlign='left'
							dataAlign='left'
							dataField='category'>
								Catégorie
						</TableHeaderColumn>
			      <TableHeaderColumn
				      dataSort={true}
							width='20%'
							headerAlign='right'
							dataAlign='right'
							dataField='amount'>
								Montant
						</TableHeaderColumn>
				  </BootstrapTable>
				}
			</div>
		);
	}
}

export default TransactionsList;
