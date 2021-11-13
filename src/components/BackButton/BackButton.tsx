import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => (
	<div className="back-container">
		<Link className="back-button" to="/">
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="arrow-left"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				style={{ width: '1rem' }}
				className="svg-inline--fa fa-arrow-left fa-w-14 fa-5x"
			>
				<g className="fa-group">
					<path
						fill="currentColor"
						d="M424 297H137.6L96 256l41.59-41H424c13.3 0 24 11 24 24.63v32.82A24.22 24.22 0 0 1 424 297z"
						className="fa-secondary"
					/>
					<path
						fill="currentColor"
						d="M201.69 473.48l-.71-.71L7 273.44a25 25 0 0 1 0-34.78L201 39.23a23.38 23.38 0 0 1 33.11-.7c.24.22.47.46.7.7L256.94 62a25.13 25.13 0 0 1-.4 35.18L95.81 256l160.73 158.8a24.94 24.94 0 0 1 .4 35.18l-22.15 22.78a23.38 23.38 0 0 1-33.1.72z"
						className="fa-primary"
					/>
				</g>
			</svg>
			<button className="back" type="button">
				Back
			</button>
		</Link>
	</div>
);
export default BackButton;
