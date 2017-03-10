import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TransactionsList extends React.Component {
  constructor(props) {
     super(props);

     this.options = {
       defaultSortName: 'date',
       defaultSortOrder: 'desc',
     };
   }

  render() {
    const transactions = this.props.transactions;
    const selectRow = {
      mode: 'checkbox',
      bgColor: 'rgba(18,84,181,.4)'
     };

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
          <BootstrapTable
            data={transactions}
            options={this.options}
            selectRow={selectRow}
            hover={true}
            bordered={false}
            tableHeaderClass='swimo-table-header'
            tableBodyClass='swimo-table-body'
            tableStyle={{margin: 0}}>

            <TableHeaderColumn
              isKey={true}
              hidden={true}
              editable={false}
              dataField='key'>
            </TableHeaderColumn>
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
