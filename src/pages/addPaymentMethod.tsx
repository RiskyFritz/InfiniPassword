import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import './index.css';

const AddPaymentMethod = () => (
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
				<label htmlFor="nameInput">Name on Card</label>
				<input
					className="long-input"
					id="nameInput"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="numberInput">Number</label>
				<input
					className="long-input"
					id="numberInput"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="securityInput">Security Code</label>
					<input
						className="short-input"
						id="numberInput"
						type="text"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="typeInput">Type</label>
					<input
						className="short-input"
						id="typeInput"
						type="text"
						spellCheck="false"
						autoComplete="nickname"
					/>
				</div>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="startInput">Start Date</label>
					<input
						className="short-input"
						id="startInput"
						type="date"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="expirationInput">Expiration Date</label>
					<input
						className="short-input"
						id="expirationInput"
						type="date"
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
export default AddPaymentMethod;
