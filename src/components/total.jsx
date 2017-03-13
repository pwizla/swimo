import React from 'react';
import SETTINGS from '../lib/settings';

class Total extends React.Component {

  render() {
    // used to highlight realTotal amount in specific case(s)
    const threshold = SETTINGS.warningThreshold;
    const realTotal = this.props.realTotal;
    return (
      <div className="component-container subtle-highlight priority-box">
        <div className="realTotal-box">
          <div className="title-box">
            Solde
          </div>
          {realTotal >= threshold &&
            <div className="realTotal-amount pull-right">
              {realTotal.toFixed(2)} €
            </div>
          }
          {(realTotal < threshold && realTotal > 0) &&
            <div className="realTotal-amount warning">
              {realTotal.toFixed(2)} €
            </div>
          }
          {realTotal < 0 &&
            <div className="realTotal-amount danger">
              <span className="pull-left">
                &nbsp;&nbsp;&nbsp;!!!
              </span>
              <span className="pull-right">
                {realTotal.toFixed(2)} €&nbsp;
              </span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Total;
