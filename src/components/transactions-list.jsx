import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Checkbox from './checkbox';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props);

    this.checkboxFormatter = this.checkboxFormatter.bind(this);

    this.options = {
      defaultSortName: 'date',
      defaultSortOrder: 'desc',
    };
  }

  checkboxFormatter(cell, row) {
    return(
      <Checkbox
        thisKey={row.key}
        checked={row.checked}
        onToggleChecked={this.props.onToggleChecked}
      />
    );
  }

  render() {
    const transactions = this.props.transactions;

    return (
      <div className="component-container transac-table">
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
              width='25%'
              headerAlign='left'
              dataAlign='left'
              dataField='description'>
                Description
            </TableHeaderColumn>
            <TableHeaderColumn
              dataSort={true}
              width='25%'
              dataAlign='right'
              dataField='amount'>
                Montant
            </TableHeaderColumn>
            <TableHeaderColumn
              dataSort={true}
              width='10%'
              headerAlign='right'
              dataAlign='right'
              dataField='checked'
              dataFormat={this.checkboxFormatter}>
                &#10004;
            </TableHeaderColumn>
          </BootstrapTable>
        }
      </div>
    );
  }
}

export default TransactionsList;
