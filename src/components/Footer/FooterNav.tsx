import './FooterNav.css';
import { Link } from 'react-router-dom';

const FooterNav = () => (
	<div className="flex flex-row justify-between items-center m-4 bg-blue-400 shadow-md pl-4 pr-4 pt-2 pb-2 rounded-xl">
		<Link to="/">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white dark:text-black w-6 "
				>
					<g>
						<path
							d="M9 25C9.35362 25 9.69276 24.8595 9.94281 24.6095C10.1929 24.3594 10.3333 24.0203 10.3333 23.6667V18.3333C10.3333 17.9797 10.4738 17.6406 10.7239 17.3905C10.9739 17.1405 11.313 17 11.6667 17H14.3333C14.687 17 15.0261 17.1405 15.2761 17.3905C15.5262 17.6406 15.6667 17.9797 15.6667 18.3333V23.6667C15.6667 24.0203 15.8071 24.3594 16.0572 24.6095C16.3072 24.8595 16.6464 25 17 25H9ZM17 25H9H17Z"
							fill="#FAFAFA"
						/>
						<path
							d="M1 13L3.66667 10.3333M3.66667 10.3333L13 1L22.3333 10.3333M3.66667 10.3333V23.6667C3.66667 24.0203 3.80714 24.3594 4.05719 24.6095C4.30724 24.8595 4.64638 25 5 25H9M22.3333 10.3333L25 13M22.3333 10.3333V23.6667C22.3333 24.0203 22.1929 24.3594 21.9428 24.6095C21.6928 24.8595 21.3536 25 21 25H17M9 25C9.35362 25 9.69276 24.8595 9.94281 24.6095C10.1929 24.3594 10.3333 24.0203 10.3333 23.6667V18.3333C10.3333 17.9797 10.4738 17.6406 10.7239 17.3905C10.9739 17.1405 11.313 17 11.6667 17H14.3333C14.687 17 15.0261 17.1405 15.2761 17.3905C15.5262 17.6406 15.6667 17.9797 15.6667 18.3333V23.6667C15.6667 24.0203 15.8071 24.3594 16.0572 24.6095C16.3072 24.8595 16.6464 25 17 25M9 25H17"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</button>
		</Link>
		<Link to="/itemManager">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					width="33"
					height="26"
					viewBox="0 0 33 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white dark:text-black w-6"
				>
					<path
						d="M1.013 21.5714V4.42857C1.013 3.51926 1.37422 2.64719 2.01721 2.00421C2.66019 1.36122 3.53226 1 4.44157 1H14.7273L18.1559 4.42857H28.4416C29.3509 4.42857 30.223 4.78979 30.8659 5.43278C31.5089 6.07576 31.8701 6.94783 31.8701 7.85714V21.5714C31.8701 22.4807 31.5089 23.3528 30.8659 23.9958C30.223 24.6388 29.3509 25 28.4416 25H4.44157C3.53226 25 2.66019 24.6388 2.01721 23.9958C1.37422 23.3528 1.013 22.4807 1.013 21.5714Z"
						stroke="#FAFAFA"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</Link>
		<Link to="/account">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					width="28"
					height="26"
					viewBox="0 0 28 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white dark:text-black w-6"
				>
					<path
						d="M10.0289 13.2946L12.7441 16.0098L18.1746 10.5794M25.8017 5.12716C21.5091 5.35513 17.3013 3.87084 14.1018 1C10.9022 3.87084 6.69445 5.35513 2.40179 5.12716C2.05633 6.46457 1.88206 7.84044 1.88318 9.22174C1.88318 16.8122 7.07472 23.1917 14.1018 25C21.1288 23.1917 26.3203 16.8136 26.3203 9.22174C26.3203 7.8071 26.1398 6.43591 25.8017 5.12716Z"
						stroke="#FAFAFA"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</Link>
		<Link to="/account">
			<button
				type="button"
				className="transition-shadow ring-0 focus:ring-2 ring-blue-500 ring-opacity-50"
			>
				<svg
					width="21"
					height="26"
					viewBox="0 0 21 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-white dark:text-black w-5"
				>
					<g>
						<path
							d="M14.4379 10.1046C15.4381 9.10438 16 7.74782 16 6.33333C16 4.91885 15.4381 3.56229 14.4379 2.5621C13.4377 1.5619 12.0812 1 10.6667 1C9.25219 1 7.89563 1.5619 6.89544 2.5621C5.89525 3.56229 5.33334 4.91885 5.33334 6.33333C5.33334 7.74782 5.89525 9.10438 6.89544 10.1046C7.89563 11.1048 9.25219 11.6667 10.6667 11.6667C12.0812 11.6667 13.4377 11.1048 14.4379 10.1046Z"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4.06701 18.4003C5.81735 16.65 8.19132 15.6667 10.6667 15.6667C13.142 15.6667 15.516 16.65 17.2663 18.4003C19.0167 20.1507 20 22.5246 20 25H1.33334C1.33334 22.5246 2.31667 20.1507 4.06701 18.4003Z"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</button>
		</Link>
	</div>
);
export default FooterNav;
