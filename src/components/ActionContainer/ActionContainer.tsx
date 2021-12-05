/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { downloadFile } from '../../utils/downloadFile';
import { uploadFile } from '../../utils/uploadFile';

const ActionContainer = () => {
	const [isFileUpload, setIsFileUpload] = useState(false);
	// const [filename, setFilename] = useState('');
	const [fileBlob, setFileBlob] = useState([] as string[]);
	const file = new Blob(fileBlob);
	return (
		<div>
			<div className="action-filter-container">
				<div className="actions-container">
					<a>
						<button
							type="button"
							className="download-button"
							onClick={() =>
								downloadFile('http://localhost:3000/password')
							}
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="download"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								style={{ width: '1rem' }}
								className="svg-button"
							>
								<g className="fa-group">
									<path
										fill="currentColor"
										d="M320 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3a19.37 19.37 0 0 1-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24a23.94 23.94 0 0 1 24-24h80a23.94 23.94 0 0 1 24 24z"
										className="fa-secondary"
									/>
									<path
										fill="currentColor"
										d="M488 352H341.3l-49 49a51.24 51.24 0 0 1-72.6 0l-49-49H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24V376a23.94 23.94 0 0 0-24-24zm-120 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm64 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"
										className="fa-primary"
									/>
								</g>
							</svg>
						</button>
					</a>
					<a>
						<button
							type="button"
							className="upload-button"
							onClick={() => setIsFileUpload(!isFileUpload)}
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="upload"
								role="img"
								id="file"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								style={{ width: '1rem' }}
								className="svg-button"
							>
								<g className="fa-group">
									<path
										fill="currentColor"
										d="M488 351.92H352v8a56 56 0 0 1-56 56h-80a56 56 0 0 1-56-56v-8H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24v-112a23.94 23.94 0 0 0-24-24zm-120 132a20 20 0 1 1 20-20 20.06 20.06 0 0 1-20 20zm64 0a20 20 0 1 1 20-20 20.06 20.06 0 0 1-20 20z"
										className="fa-secondary"
									/>
									<path
										fill="currentColor"
										d="M192 359.93v-168h-87.7c-17.8 0-26.7-21.5-14.1-34.11L242.3 5.62a19.37 19.37 0 0 1 27.3 0l152.2 152.2c12.6 12.61 3.7 34.11-14.1 34.11H320v168a23.94 23.94 0 0 1-24 24h-80a23.94 23.94 0 0 1-24-24z"
										className="fa-primary"
									/>
								</g>
							</svg>
						</button>
					</a>
					<Link to="/addPassword">
						<button type="button" className="add-button">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="plus"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								style={{ width: '1rem' }}
								className="svg-button"
							>
								<g className="fa-group">
									<path
										fill="currentColor"
										d="M176 448a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V304h-96zm64-416h-32a32 32 0 0 0-32 32v144h96V64a32 32 0 0 0-32-32z"
										className="fa-secondary"
									/>
									<path
										fill="currentColor"
										d="M448 240v32a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"
										className="fa-primary"
									/>
								</g>
							</svg>
						</button>
					</Link>
					<Link to="/insights">
						<button type="button" className="insights-Button">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="far"
								data-icon="lightbulb"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 352 512"
								style={{ width: '.75rem' }}
								className="svg-button"
							>
								<path
									fill="currentColor"
									d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
									className=""
								/>
							</svg>
						</button>
					</Link>
				</div>
			</div>
			{isFileUpload && (
				<>
					<div className="file-upload-container">
						<div className="file-input-sub">
							<input
								className="file-input"
								type="file"
								onChange={(e) => {
									// setFilename(String(e.target.value) || '');
									setFileBlob([e.target.files[0]] || []);
								}}
							/>
						</div>
						<div className="file-action-sub">
							<button
								className="cancel-button"
								type="button"
								onClick={() => setIsFileUpload(false)}
							>
								Cancel
							</button>
							<button
								className="submit-button"
								type="submit"
								// onclick run upload file with the file selected
								onClick={() => {
									uploadFile(file);
									// set time out to set isFileUpload to false
									setTimeout(() => {
										setIsFileUpload(false);
									}, 1000);
								}}
							>
								Upload
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
export default ActionContainer;
