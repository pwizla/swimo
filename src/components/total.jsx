import React from 'react';
import SETTINGS from '../lib/settings';

class Total extends React.Component {

  render() {
    // used to highlight total amount in specific case(s)
    const threshold = SETTINGS.warningThreshold;
    const total = this.props.total;
    return (
      <div className="component-container subtle-highlight priority-box">
        <div className="total-box">
          <div className="title-box">
            Solde
          </div>
          {total >= threshold &&
            <div className="total-amount pull-right">
              {total.toFixed(2)} €
            </div>
          }
          {(total < threshold && total > 0) &&
            <div className="total-amount warning">
              {total.toFixed(2)} €
            </div>
          }
          {total < 0 &&
            <div className="total-amount danger">
              <span className="pull-left">
                &nbsp;&nbsp;&nbsp;!!!
              </span>
              <span className="pull-right">
                {total.toFixed(2)} €&nbsp;
              </span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Total;
