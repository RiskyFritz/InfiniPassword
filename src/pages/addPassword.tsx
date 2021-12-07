import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useForm } from 'react-hook-form';
import BackButton from '../components/BackButton/BackButton';
import { strengthScore } from '../utils/passwordStrength';
import { postCredentials } from '../utils/postPassword';
import FormFooter from '../components/FormFooter/FormFooter';
import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';

const AddPassword = () => {
	// ---- set strength meter ----
	const [strengthColor, setStrengthColor] = useState('#fff');
	const [strength, setStrength] = useState(0);
	const [data, setData] = useState({
		url: '',
		name: '',
		folder: '',
		username: '',
		password: '',
		notes: '',
		// strength: 0,
		// date: new Date(),
	});
	const clearForm = () => {
		setData({
			url: '',
			name: '',
			folder: '',
			username: '',
			password: '',
			notes: '',
			// strength: 0,
			// date: new Date(),
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (res: any) => console.log(res);
	console.log(errors);

	const input: InputOptions[] = [
		{
			label: 'URL',
			name: 'url',
			type: 'text',
			placeholder: 'https://www.example.com',
		},
		{
			label: 'Name',
			name: 'name',
			type: 'text',
			placeholder: 'My Website',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'My Website',
		},
		{
			label: 'Username',
			name: 'username',
			type: 'text',
			placeholder: 'Username',
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			placeholder: 'Password',
		},
		{
			label: 'Notes',
			name: 'notes',
			type: 'text',
			placeholder: 'Notes',
		},
	];

	return (
		<div>
			<BackButton />
			<FormCreator inputs={input} onSubmit={onSubmit} />

			{/* <div className="form-container">
				<div className="form-group">
					<label htmlFor="urlInput">URL</label>
					<input
						className="long-input"
						id="urlInput"
						type="text"
						spellCheck="false"
						autoComplete="url"
						onChange={(e) =>
							setData({ ...data, url: e.target.value })
						}
					/>
				</div>
				<div className="settings-container">
					<div className="form-group">
						<label htmlFor="nameInput">Name</label>
						<input
							className="short-input"
							id="nameInput"
							type="text"
							spellCheck="false"
							autoComplete="nickname"
							onChange={(e) =>
								setData({ ...data, name: e.target.value })
							}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="folderInput">Folder</label>
						<input
							className="short-input"
							id="folderInput"
							type="text"
							spellCheck="false"
							onChange={(e) =>
								setData({ ...data, folder: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="credentials-container">
					<div className="form-group">
						<label htmlFor="usernameInput">Username</label>
						<input
							className="short-input"
							id="usernameInput"
							type="text"
							spellCheck="false"
							autoComplete="username"
							onChange={(e) =>
								setData({ ...data, username: e.target.value })
							}
						/>
					</div>
					<div className="password-container-2">
						<div className="form-group">
							<label htmlFor="passwordInput">Password</label>
							<input
								className="short-input"
								id="passwordInput"
								type="password"
								spellCheck="false"
								onChange={(e) => {
									setStrength(strengthScore(e.target.value));
									setData({
										...data,
										password: e.target.value,
									});

									const passwordStrength = strength;
									console.log(strength);
									// set the color of the strength meter
									if (passwordStrength === 0) {
										setStrengthColor('#aaa');
									} else if (
										passwordStrength >= 1 &&
										passwordStrength <= 20
									) {
										setStrengthColor('#f00');
									} else if (
										passwordStrength > 20 &&
										passwordStrength <= 40
									) {
										setStrengthColor('#f90');
									} else if (
										passwordStrength > 40 &&
										passwordStrength <= 60
									) {
										setStrengthColor('#fbff00');
									} else if (
										passwordStrength > 60 &&
										passwordStrength <= 80
									) {
										setStrengthColor('#9dff00');
										console.log('green');
									} else if (passwordStrength > 80) {
										setStrengthColor('#0f0');
									}
								}}
							/>
							<div className="meter-container">
								<div
									className="meter"
									style={{
										width: `${strength}%`,
										backgroundColor: `${strengthColor}`,
										visibility: 'visible',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="notesInput">Notes</label>
					<textarea
						className="long-input"
						id="notesInput"
						spellCheck="true"
						onChange={(e) =>
							setData({ ...data, notes: e.target.value })
						}
					/>
				</div>
				<div className="action-container">
					<Link className="cancel-anchor" to="/">
						<button className="cancel-button" type="button">
							Cancel
						</button>
					</Link>
					<button
						className="submit-button"
						type="submit"
						onClick={() => {
							console.log(data);
							// try posting to the database
							postCredentials(data);
						}}
					>
						Submit
					</button>
				</div>
			</div> */}
		</div>
	);
};
export default AddPassword;
