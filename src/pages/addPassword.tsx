import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BackButton from '../components/BackButton/BackButton';

const addPassword = () => (
	<div>
		<BackButton />
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
