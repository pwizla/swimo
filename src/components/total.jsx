import React from 'react';
import WARNING_THRESHOLD from '../lib/settings';

class Total extends React.Component {

	render() {
		console.log("WARNING_THRESHOLD: ", WARNING_THRESHOLD);
		const total = this.props.total;
		return (
			<div className="component-container subtle-highlight">
				<div className="total-box">
					<div className="title-box">
						Solde
					</div>
					{total > WARNING_THRESHOLD &&
						<div className="total-amount">
							{total.toFixed(2)} €
						</div>
					}
					{(total < WARNING_THRESHOLD && total > 0) &&
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
