import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const addPassword = () => (
	<div>
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
		<div className="formContainer" id="formContainer">
			<div className="formGroup" id="urlContainer">
				<label htmlFor="urlInput">URL</label>
				<input
					className="longInput"
					id="urlInput"
					type="text"
					spellCheck="false"
					autoComplete="url"
				/>
			</div>
			<div className="settingsContainer">
				<div className="formGroup">
					<label htmlFor="nameInput">Name</label>
					<input
						className="shortInput"
						id="nameInput"
						type="text"
						spellCheck="false"
						autoComplete="nickname"
					/>
				</div>
				<div className="formGroup">
					<label htmlFor="folderInput">Folder</label>
					<input
						className="shortInput"
						id="folderInput"
						type="text"
						spellCheck="false"
					/>
				</div>
			</div>
			<div className="credentialsContainer">
				<div className="formGroup">
					<label htmlFor="usernameInput">Username</label>
					<input
						className="shortInput"
						id="usernameInput"
						type="text"
						spellCheck="false"
						autoComplete="username"
					/>
				</div>
				<div className="passwordContainer">
					<div className="formGroup">
						<label htmlFor="passwordInput">Password</label>
						<input
							className="shortInput"
							id="passwordInput"
							type="password"
							spellCheck="false"
						/>
					</div>
					<div className="meterContainer">
						<div className="meter">
							<div className="meterBreak" id="meter1" />
							<div className="meterBreak" id="meter2" />
							<div className="meterBreak" id="meter3" />
							<div className="meterBreak" id="meter4" />
							<div className="meterBreak" id="meter5" />
						</div>
					</div>
				</div>
			</div>
			<div className="formGroup">
				<label htmlFor="notesInput">Notes</label>
				<textarea
					className="boxInput"
					id="notesInput"
					spellCheck="true"
				/>
			</div>
			<div className="optionsContainer" />
			<div className="actionContainer">
				<Link id="cancelAnchor" to="/">
					<button id="cancelButton" type="button">
						Cancel
					</button>
				</Link>
				<button id="submitButton" type="button">
					Submit
				</button>
			</div>
		</div>
	</div>
);
export default addPassword;
