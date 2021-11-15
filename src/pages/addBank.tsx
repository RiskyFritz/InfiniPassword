import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import './index.css';

const AddBank = () => (
	<div>
		<BackButton />
		<div className="form-container">
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="nameInput">Name</label>
					<input
						className="short-input"
						id="nameInput"
						type="text"
						spellCheck="false"
						autoComplete="nickname"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="folderInput">Folder</label>
					<input
						className="short-input"
						id="folderInput"
						type="text"
						spellCheck="false"
					/>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="nameInput">Bank Name</label>
				<input
					className="long-input"
					id="nameInput"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="typeInput">Account Type</label>
				<input
					className="long-input"
					id="typeInput"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="routingInput">Routing Number</label>
					<input
						className="short-input"
						id="routingInput"
						type="text"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="numberInput">Account Number</label>
					<input
						className="short-input"
						id="numberInput"
						type="text"
						spellCheck="false"
						autoComplete="nickname"
					/>
				</div>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="addressInput">Bank Address</label>
					<input
						className="short-input"
						id="addressInput"
						type="text"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phoneInput">Bank Phone</label>
					<input
						className="short-input"
						id="phoneInput"
						type="text"
						spellCheck="false"
						autoComplete="nickname"
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="notesInput">Notes</label>
				<textarea
					className="long-input"
					id="notesInput"
					spellCheck="true"
				/>
			</div>
			<div className="action-container">
				<Link className="cancel-anchor" to="/">
					<button className="cancel-button" type="button">
						Cancel
					</button>
				</Link>
				<button className="submit-button" type="submit">
					Submit
				</button>
			</div>
		</div>
	</div>
);
export default AddBank;
