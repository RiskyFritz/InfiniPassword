import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BackButton from '../components/BackButton/BackButton';

const managePasswords = () => (
	<div>
		<BackButton />
		<div className="actionFilterContainer">
			<div className="actionsContainer">
				<a>
					<button type="button" id="downloadButton">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="download"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							style={{ width: '1rem' }}
							className="svg-inline--fa fa-download fa-w-16 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M320 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3a19.37 19.37 0 0 1-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24a23.94 23.94 0 0 1 24-24h80a23.94 23.94 0 0 1 24 24z"
									className="fa-secondary"
								/>
								<path
									fill="currentColor"
									d="M488 352H341.3l-49 49a51.24 51.24 0 0 1-72.6 0l-49-49H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24V376a23.94 23.94 0 0 0-24-24zm-120 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm64 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"
									className="fa-primary"
								/>
							</g>
						</svg>
					</button>
				</a>
				<a>
					<button type="button" id="uploadButton">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="upload"
							role="img"
							id="file"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							style={{ width: '1rem' }}
							className="svg-inline--fa fa-upload fa-w-16 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M488 351.92H352v8a56 56 0 0 1-56 56h-80a56 56 0 0 1-56-56v-8H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24v-112a23.94 23.94 0 0 0-24-24zm-120 132a20 20 0 1 1 20-20 20.06 20.06 0 0 1-20 20zm64 0a20 20 0 1 1 20-20 20.06 20.06 0 0 1-20 20z"
									className="fa-secondary"
								/>
								<path
									fill="currentColor"
									d="M192 359.93v-168h-87.7c-17.8 0-26.7-21.5-14.1-34.11L242.3 5.62a19.37 19.37 0 0 1 27.3 0l152.2 152.2c12.6 12.61 3.7 34.11-14.1 34.11H320v168a23.94 23.94 0 0 1-24 24h-80a23.94 23.94 0 0 1-24-24z"
									className="fa-primary"
								/>
							</g>
						</svg>
					</button>
				</a>
				<Link to="addPassword.html">
					<button type="button" id="addButton">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="plus"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							style={{ width: '1rem' }}
							className="svg-inline--fa fa-plus fa-w-14 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M176 448a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V304h-96zm64-416h-32a32 32 0 0 0-32 32v144h96V64a32 32 0 0 0-32-32z"
									className="fa-secondary"
								/>
								<path
									fill="currentColor"
									d="M448 240v32a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"
									className="fa-primary"
								/>
							</g>
						</svg>
					</button>
				</Link>
				<Link to="insights.html">
					<button type="button" id="insightsButton">
						<i className="fa fa-lightbulb-o" aria-hidden="true" />
					</button>
				</Link>
			</div>
		</div>
		<div className="fileSelect" />
		<script src="../scripts/passwordManager.js" />
		<div className="container" />
		<script src="../scripts/passwordManager.js" />
	</div>
);
export default managePasswords;
