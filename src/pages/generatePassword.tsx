import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Generate = () => (
	// ---- hooks ----
	// const [generatedPassword, setGeneratedPassword] = useState('');

	// ---- functions ----
	// const generatePassword = () => {
	// 	setGeneratedPassword(`${generatedPassword}!`);
	// };

	<div>
		<Link id="back-button" to="/">
			<div className="back-container">
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
				<button type="button">Back</button>
			</div>
		</Link>
		<div className="password-container">
			<div id="test" />
			<input
				autoComplete="off"
				className="password"
				id="password"
				spellCheck="false"
				type="text"
				placeholder="Please enter a password..."
			/>
			<button id="copy-password" type="button">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fad"
					data-icon="clone"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-clone fa-w-16 fa-5x"
				>
					<g className="fa-group">
						<path
							fill="currentColor"
							d="M48 512a48 48 0 0 1-48-48V176a48 48 0 0 1 48-48h48v208a80.09 80.09 0 0 0 80 80h208v48a48 48 0 0 1-48 48H48z"
							className="fa-secondary"
						/>
						<path
							fill="currentColor"
							d="M512 48v288a48 48 0 0 1-48 48H176a48 48 0 0 1-48-48V48a48 48 0 0 1 48-48h288a48 48 0 0 1 48 48z"
							className="fa-primary"
						/>
					</g>
				</svg>
			</button>
			<button
				id="generate-password-button"
				type="button"
				onClick={() => {
					// write function to spin button using rotate360
					this.style = { animation: 'rotate360 500ms linear' };
					setTimeout(() => {
						style = { animation: '' };
					}, 500);
				}}
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fad"
					data-icon="sync"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-sync fa-w-16 fa-5x"
				>
					<g className="fa-group">
						<path
							fill="currentColor"
							d="M0 500V299.67a12 12 0 0 1 12-12h200.33a12 12 0 0 1 12 12v47.41a12 12 0 0 1-12.57 12l-101.87-4.88a176.07 176.07 0 0 0 317.25-56.94 12 12 0 0 1 11.67-9.26h49.09a12 12 0 0 1 11.8 14.18C478.07 417.08 377.19 504 256 504a247.43 247.43 0 0 1-188.76-87.17l4.13 82.57a12 12 0 0 1-12 12.6H12a12 12 0 0 1-12-12z"
							className="fa-secondary"
						/>
						<path
							fill="currentColor"
							d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.4 247.4 0 0 1 188.9 87.34l-4-82.77A12 12 0 0 1 452.92 0h47.41a12 12 0 0 1 12 12v200.33a12 12 0 0 1-12 12H300a12 12 0 0 1-12-12v-47.41a12 12 0 0 1 12.57-12l101.53 4.88a176.07 176.07 0 0 0-317.24 56.94A12 12 0 0 1 73.19 224H24.1a12 12 0 0 1-11.8-14.18z"
							className="fa-primary"
						/>
					</g>
				</svg>
			</button>
		</div>
		<div className="meter-container">
			<div className="meter">
				<div className="meterBreak" id="meter1" />
				<div className="meterBreak" id="meter2" />
				<div className="meterBreak" id="meter3" />
				<div className="meterBreak" id="meter4" />
				<div className="meterBreak" id="meter5" />
			</div>
		</div>
		<div id="options-container">
			<h3 className="section-title">Options</h3>
			<div className="option-length-sub">
				<h4 className="length-title">Password Length</h4>
				<div className="slider-container">
					<h3 id="length-value">12</h3>
					<input
						id="length"
						type="range"
						value="12"
						min="1"
						max="100"
					/>
				</div>
			</div>
			<h4 className="char-title">Include Characters</h4>
			<div id="options-char-sub">
				<label htmlFor="check-letters">Letters</label>
				<input
					type="checkbox"
					id="check-letters"
					name="check-letters"
					value="letters"
					checked
				/>
				<label htmlFor="check-numbers">Numbers</label>
				<input
					type="checkbox"
					id="check-numbers"
					name="checkNumbers"
					value="Numbers"
					checked
				/>
				<label htmlFor="check-symbols">Symbols</label>
				<input
					type="checkbox"
					id="check-symbols"
					name="checkSymbols"
					value="Symbols"
					checked
				/>
			</div>
		</div>
	</div>
);
export default Generate;
