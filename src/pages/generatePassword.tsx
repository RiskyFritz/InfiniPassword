/* eslint-disable array-callback-return */
import { useState } from 'react';
import './index.css';
import RotateButton from '../components/RotateButton/RotateButton';
import { generatePassword } from '../utils/generatePassword';
import ScaleButton from '../components/ScaleButton/ScaleButton';
import { strengthScore } from '../utils/passwordStrength';
import DropdownButton from '../components/CollapseButton copy/DropdownButton';
import PasswordHistoryContainer from '../components/PasswordHistoryContainer/PasswordHistoryContainer';
import { meterColor } from '../utils/strengthColor';

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

	// ---- functions ----
	// const generatePassword = () => {
	// 	setGeneratedPassword(`${generatedPassword}!`);
	// };

	return (
		<div>
			<div>
				<div className="text-xl font-bold mx-4 my-2">
					Generate Password
				</div>
				<div className="my-1 mx-4 h-0.5 opacity bg-black dark:bg-white " />
			</div>

			<div className="flex flex-row justify-between h-8 items-start mx-4 mt-4 mb-1 bg-gray-100 dark:bg-zinc-800">
				<div className="flex flex-col">
					<input
						autoComplete="off"
						className="rounded-xl shadow text-sm outline-none h-10 pl-4 pr-4 mb-1 bg-white dark:bg-zinc-900"
						id="password"
						spellCheck="false"
						type="text"
						value={generatedPassword}
						placeholder="Generate Password"
						// onChange set generated password, strength, and color
						onChange={(e) => {
							setGeneratedPassword(e.target.value);
							setStrength(strengthScore(e.target.value));
							setStrengthColor(meterColor(strength));
						}}
					/>
					<div className="h-0.5 bg-gray-200 dark:bg-zinc-600">
						<div
							className="meter"
							style={{
								width: `${strength}%`,
								backgroundColor: `${strengthColor}`,
								transition: 'width 0.5s ease-in-out',
							}}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-around ml-2">
					<div className="rounded-xl bg-blue-400 mr-2 items-center shadow">
						<ScaleButton
							type="button"
							className="px-3 py-2.5"
							classNameSvg="w-4 text-white dark:text-black"
							onClick={() =>
								// copy password to clipboard
								navigator.clipboard.writeText(generatedPassword)
							}
						/>
					</div>
					<div className="rounded-xl bg-blue-400 mr-2 items-center shadow">
						<RotateButton
							type="button"
							className="px-3 py-2.5"
							classNameSvg="w-4 text-white dark:text-black"
							onClick={() => {
								// get a random password with the length
								const newGeneratedPassword = generatePassword(
									Number(length),
									options,
								);
								// set the password
								setGeneratedPassword(newGeneratedPassword);
								setStrength(
									strengthScore(newGeneratedPassword),
								);
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
								setStrengthColor(meterColor(passwordStrength));
							}}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="flex flex-col mr-4 ml-4 mt-6 mb-2">
					<DropdownButton
						className="text-base font-semibold w-full"
						classNameSvg="w-3 flex justify-end"
						name="Options"
						onClick={() => {
							if (isCollapsed) {
								setIsCollapsed(false);
							} else {
								setIsCollapsed(true);
							}
						}}
					/>
					<div className="my-1 h-0.5 opacity bg-black dark:bg-white" />
				</div>
				{!isCollapsed && (
					<>
						<div className="flex flex-col">
							<div className="flex flex-col justify-start">
								<h4 className="text-sm ml-4">
									Password Length
								</h4>
								<div className="slider-container">
									<h3 className="text-sm">{length}</h3>
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
							<div className="flex flex-col mx-4 text-sm">
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
														letters:
															!options.letters,
													};
													setOptions(newOptions);
												}}
											/>
											{'		'}Include Letters
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
														numbers:
															!options.numbers,
													};
													setOptions(newOptions);
												}}
											/>
											{'		'}Include Numbers
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
														symbols:
															!options.symbols,
													};
													setOptions(newOptions);
												}}
											/>
											{'		'}Include Symbols
										</label>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<div className="flex flex-col mr-4 ml-4 mt-2 mb-2">
				<DropdownButton
					className="text-base font-semibold w-full"
					name="Recently Generated"
					rotation="180"
					classNameSvg="w-3 flex justify-end"
					onClick={() => {
						setShowHistory(!showHistory);
					}}
				/>
				<div className="my-1 h-0.5 opacity bg-black dark:bg-white" />
			</div>
			{showHistory && (
				<>
					<PasswordHistoryContainer history={historyArray} />
				</>
			)}
		</div>
	);
};
export default Generate;
