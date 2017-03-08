import React from 'react';
import SETTINGS from '../lib/settings';

class Total extends React.Component {

	render() {
		const threshold = SETTINGS.warningThreshold;
		const total = this.props.total;
		return (
			<div className="component-container subtle-highlight">
				<div className="total-box">
					<div className="title-box">
						Solde
					</div>
					{total > threshold &&
						<div className="total-amount">
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
							{total.toFixed(2)} €
						</div>
					}
				</div>
			</div>
		);
	}
}

export default Total;
