import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import './index.css';

const AddAddress = () => (
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
				<label htmlFor="titleInput">Title</label>
				<select id="titleInput" className="long-input">
					<option value=""> </option>
					<option value="">Mr</option>
					<option value="">Mrs</option>
					<option value="">Ms</option>
					<option value="">Dr</option>
				</select>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="firstNameInput">First Name</label>
					<input
						className="short-input"
						id="firstNameInput"
						type="text"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastNameInput">Last Name</label>
					<input
						className="short-input"
						id="lastNameInput"
						type="text"
						spellCheck="false"
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="companyInput">Company</label>
				<input
					className="long-input"
					id="companyInput"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="address1Input">Address 1</label>
				<input
					className="long-input"
					id="address1Input"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="address2Input">Address 2</label>
				<input
					className="long-input"
					id="address2Input"
					type="text"
					spellCheck="false"
				/>
			</div>
			<div className="settings-container">
				<div className="form-group">
					<label htmlFor="cityInput">City</label>
					<input
						className="short-input"
						id="cityInput"
						type="text"
						spellCheck="false"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="stateInput">State</label>
					<input
						className="short-input"
						id="stateInput"
						type="text"
						spellCheck="false"
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="zipcodeInput">ZIP Code</label>
				<input
					className="short-input"
					id="zipcodeInput"
					type="text"
					spellCheck="false"
				/>
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
export default AddAddress;
