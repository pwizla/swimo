import React from 'react';

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
		return (
			<div className="component-container">
				<div className="title-box">
					Liste des transactions
				</div>
				{this.props.transactions.length === 0 &&
					<div>
						Pas de transaction pour l'instant.
					</div>
				}
				{this.props.transactions.length > 0 &&
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Montant</th>
							</tr>
						</thead>
						<tbody>
							{this.props.transactions.map((transaction) =>  this._renderTransaction(transaction))}
						</tbody>
					</table>
				}	
			</div>
		);
	}
}

export default TransactionsList;
