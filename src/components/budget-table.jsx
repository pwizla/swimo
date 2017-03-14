import React from 'react';
import _ from 'lodash';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BudgetTable extends React.Component {

  constructor(props) {
    super(props);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
  }

  onAfterSaveCell(row, cellName, cellValue) {
    this.props.onUpdateBudget(row, cellName, cellValue);
  }

  rowFormatter(row) {
    let className = '';
    if (Number(row.restant) <= Number(row.enveloppe) / 10 && Number(row.restant) > 0) {
      className = 'amount-warning';
    } else if (Number(row.restant) < 0) {
      className = 'amount-danger';
    }
    return className;
  }

  render() {
    const flatBudget = this.props.flatBudget;
    const cellEditProps = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell
    };

    return (
      <div className="component-container budget-table priority-box">
        <div className="title-box">
          Budget
        </div>
        <BootstrapTable
          data={flatBudget}
          cellEdit={cellEditProps}
          options={this.options}
          bordered={false}
          tableHeaderClass='budget-table-header'
          tableBodyClass='budget-table-body'
          trClassName={this.rowFormatter}
          tableStyle={{margin: 0}}>

          <TableHeaderColumn
            dataSort={true}
            isKey={true}
            editable={false}
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
            editable={false}
            width='20%'
            headerAlign='left'
            dataAlign='right'
            dataField='engaged'>
              Engagé
          </TableHeaderColumn>
          <TableHeaderColumn
            dataSort={true}
            editable={false}
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
