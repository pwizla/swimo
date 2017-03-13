import React from 'react';
import SETTINGS from '../lib/settings';

class Total extends React.Component {

  render() {
    // used to highlight realTotal amount in specific case(s)
    const threshold = SETTINGS.warningThreshold;
    const realTotal = this.props.realTotal;
    const bankTotal = this.props.bankTotal;
    console.log("realTotal: ", realTotal);
    console.log("bankTotal: ", bankTotal);
    return (
      <div className="component-container subtle-highlight priority-box">
        <div className="total-box">
          <div className="title-box">
            Solde
          </div>
          {realTotal >= threshold &&
            <div className="total-amount pull-right">
              Réel: {realTotal.toFixed(2)} €
            </div>
          }
          {(realTotal < threshold && realTotal > 0) &&
            <div className="total-amount warning">
              Réel: {realTotal.toFixed(2)} €
            </div>
          }
          {realTotal <= 0 &&
            <div className="total-amount danger">
              <span className="pull-left">
                &nbsp;&nbsp;&nbsp;!!!
              </span>
              <span className="pull-right">
                Réel: {realTotal.toFixed(2)} €&nbsp;
              </span>
            </div>
          }
          {bankTotal >= threshold &&
            <div className="total-amount pull-right grey">
              Banque: {bankTotal.toFixed(2)} €
            </div>
          }
          {(bankTotal < threshold && bankTotal > 0) &&
            <div className="total-amount warning">
              Banque: {bankTotal.toFixed(2)} €
            </div>
          }
          {bankTotal <= 0 &&
            <div className="total-amount danger">
              <span className="pull-left">
                &nbsp;&nbsp;&nbsp;!!!
              </span>
              <span className="pull-right">
                Banque: {bankTotal.toFixed(2)} €&nbsp;
              </span>
            </div>
          } 
        </div>
      </div>
    );
  }
}

export default Total;
