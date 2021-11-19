import React, { useState } from 'react';

const ShowHistoryContainer = () => {
	const [isHistory, setIsHistory] = useState();
	return (
		<div>
			<div className="show-history-container">
				<button
					className="show-history-button"
					type="button"
					// onclick access the history object and map over it
					onClick={() => {
						setIsHistory(!isHistory);
					}}
				>
					Show History
				</button>
				{isHistory && (
					<div className="history-container">
						{history.map((password, index) => (
							<div key={index} className="history-password">
								{password}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
export default ShowHistoryContainer;
