/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import './index.css';
import BackButton from '../components/BackButton/BackButton';
import RotateButton from '../components/RotateButton/RotateButton';
import { generatePassword } from '../utils/generatePassword';
import ScaleButton from '../components/ScaleButton/ScaleButton';
import { strengthScore } from '../utils/passwordStrength';
import CollapseButton from '../components/CollapseButton/CollapseButton';

const Generate = () => {
	// ---- hooks ----
	const [generatedPassword, setGeneratedPassword] = useState('');
	const [options, setOptions] = useState({
		symbols: true,
		numbers: true,
		letters: true,
	});

	// ---- set default length ----
	const [length, setLength] = useState('');
	if (length === '') {
		setLength('12');
	}

	// ---- set strength meter ----
	const [strength, setStrength] = useState(0);
	const [strengthColor, setStrengthColor] = useState('#fff');

	// ---- set collapsed options ----
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [historyArray, setHistoryArray] = useState([
		{
			password: '',
			date: new Date(),
		},
	]);

	// remove blank passwords from history, and keep only last 5 passwords
	const filteredHistoryArray = historyArray.filter(
		(password) => password.password !== '',
	);
	const historyLength = filteredHistoryArray.length;
	if (historyLength > 5) {
		filteredHistoryArray.splice(0, historyLength - 5);
	}

	// ---- functions ----
	// const generatePassword = () => {
	// 	setGeneratedPassword(`${generatedPassword}!`);
	// };

	return (
		<div>
			<BackButton />
			<div className="password-container">
				<div id="test" />
				<input
					autoComplete="off"
					className="password"
					id="password"
					spellCheck="false"
					type="text"
					value={generatedPassword}
					placeholder="Please enter a password..."
					// onChange set generated password, strength, and color
					onChange={(e) => {
						setGeneratedPassword(e.target.value);
						setStrength(strengthScore(e.target.value));

						if (strength === 0) {
							setStrengthColor('#aaa');
						} else if (strength >= 1 && strength <= 20) {
							setStrengthColor('#f00');
						} else if (strength > 20 && strength <= 40) {
							setStrengthColor('#f90');
						} else if (strength > 40 && strength <= 60) {
							setStrengthColor('#fbff00');
						} else if (strength > 60 && strength <= 80) {
							setStrengthColor('#9dff00');
						} else if (strength > 80) {
							setStrengthColor('#0f0');
						}
					}}
				/>
				<ScaleButton
					className="copy-password"
					type="button"
					onClick={() =>
						// copy password to clipboard
						navigator.clipboard.writeText(generatedPassword)
					}
				/>
				<RotateButton
					className="generate-password-button"
					type="button"
					onClick={() => {
						// get a random password with the length
						const newGeneratedPassword = generatePassword(
							Number(length),
							options,
						);
						// set the password
						setGeneratedPassword(newGeneratedPassword);
						setStrength(strengthScore(newGeneratedPassword));
						// sethistoryarray to add new password
						setHistoryArray([
							...historyArray,
							{
								password: newGeneratedPassword,
								date: new Date(),
							},
						]);

						const passwordStrength =
							strengthScore(newGeneratedPassword);
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
						} else if (passwordStrength > 80) {
							setStrengthColor('#0f0');
						}
					}}
				/>
			</div>
			<div className="meter-container">
				<div
					className="meter"
					style={{
						width: `${strength}%`,
						backgroundColor: `${strengthColor}`,
						transition: 'width 0.5s ease-in-out',
					}}
				/>
			</div>
			<div className="history-button-container">
				{showHistory && (
					<>
						<button
							className="close-history-button"
							type="button"
							onClick={() => setShowHistory(false)}
						>
							Close History
						</button>
					</>
				)}
				<button
					className="history-button"
					type="button"
					onClick={() => {
						setShowHistory(!showHistory);
					}}
				>
					History
				</button>
			</div>
			{showHistory && (
				<>
					<div className="history-container">
						{filteredHistoryArray.map((password, index) => {
							// do not return blank passwords
							// if more than 10 passwords, remove the oldest one
							// if any passwords are blank, remove them
							if (filteredHistoryArray.length >= 1) {
								return (
									<div className="history-item" key={index}>
										<div className="history-item-password">
											{String(password.password)}
										</div>
										<div className="history-item-date">
											{password.date.toLocaleString()}
										</div>
										<ScaleButton
											className="copy-password"
											type="button"
											onClick={() =>
												// copy password to clipboard
												navigator.clipboard.writeText(
													password.password,
												)
											}
										/>
									</div>
								);
							}
						})}
					</div>
				</>
			)}
			<div className="options-container">
				<button type="button" className="options-button">
					<h3 className="section-title">Options</h3>
					<CollapseButton
						type="button"
						className="collapse-button"
						onClick={() => {
							if (isCollapsed) {
								setIsCollapsed(false);
							} else {
								setIsCollapsed(true);
							}
						}}
					>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="caret-down"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							style={{ width: '0.75rem' }}
							className="svg-inline--fa fa-caret-down fa-w-10 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M160 168h128.92c17.85 0 26.8 22.48 14.17 35.63L174.17 337.89c-.26.28-.53.54-.8.8A19.41 19.41 0 0 1 160 344z"
									className="fa-secondary"
								/>
								<path
									fill="currentColor"
									d="M160 344a19.41 19.41 0 0 1-13.37-5.29c-.27-.26-.54-.52-.8-.8L16.91 203.63C4.28 190.48 13.23 168 31.08 168H160z"
									className="fa-primary"
								/>
							</g>
						</svg>
					</CollapseButton>
				</button>
				{!isCollapsed && (
					<>
						<div className="options-length-sub">
							<h4 className="length-title">Password Length</h4>
							<div className="slider-container">
								<h3 className="slider-title">{length}</h3>
								<input
									type="range"
									min="1"
									defaultValue="12"
									max="99"
									width="100%"
									value={length}
									onChange={(e) => {
										setLength(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="options-char-sub">
							<h4 className="char-title">Include</h4>
							<div className="char-container">
								<div className="char-sub">
									<label htmlFor="check-letters">
										<input
											type="checkbox"
											id="check-letters"
											name="check-letters"
											value="letters"
											checked={options.letters}
											onClick={() => {
												const newOptions = {
													...options,
													letters: !options.letters,
												};
												setOptions(newOptions);
											}}
										/>
										{'		'}Letters
									</label>
								</div>
								<div className="char-sub">
									<label htmlFor="check-numbers">
										<input
											type="checkbox"
											id="check-numbers"
											name="checkNumbers"
											value="Numbers"
											checked={options.numbers}
											onClick={() => {
												const newOptions = {
													...options,
													numbers: !options.numbers,
												};
												setOptions(newOptions);
											}}
										/>
										{'		'}Numbers
									</label>
								</div>
								<div className="char-sub">
									<label htmlFor="check-symbols">
										<input
											type="checkbox"
											id="check-symbols"
											name="checkSymbols"
											value="Symbols"
											checked={options.symbols}
											onClick={() => {
												const newOptions = {
													...options,
													symbols: !options.symbols,
												};
												setOptions(newOptions);
											}}
										/>
										{'		'}Symbols
									</label>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
export default Generate;
