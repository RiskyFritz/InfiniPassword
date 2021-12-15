/* eslint-disable array-callback-return */
import { useState } from 'react';
import ScaleButton from '../ScaleButton/ScaleButton';

export interface HistoryArray {
	password: string;
	date: Date;
}

interface PasswordHistoryContainerProps {
	history: HistoryArray[];
}

const PasswordHistoryContainer: React.FC<PasswordHistoryContainerProps> = ({
	history,
}) => {
	const filteredHistoryArray = history.filter(
		(password) => password.password !== '',
	);
	const historyLength = filteredHistoryArray.length;
	if (historyLength > 3) {
		filteredHistoryArray.splice(0, historyLength - 3);
	}

	return (
		<div className="history-container">
			{filteredHistoryArray.map((password, index) => {
				// do not return blank passwords
				// if more than 10 passwords, remove the oldest one
				// if any passwords are blank, remove them
				if (filteredHistoryArray.length >= 1) {
					return (
						<div
							className="flex flex-row justify-between items-center mx-4 my-1"
							key={index}
						>
							<div className="bg-white shadow dark:bg-zinc-900 p-1 w-28 rounded-md overflow-hidden overflow-ellipsis inline-block">
								{String(password.password)}
							</div>
							<div className="history-item-date">
								{password.date.toLocaleString()}
							</div>
							<ScaleButton
								className="copy-password"
								classNameSvg="w-3 text-black dark:text-white"
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
	);
};
export default PasswordHistoryContainer;
