import { Link } from 'react-router-dom';
import './index.css';

const AddItem = () => (
	// hello
	<div>
		<div className="nav-container">
			<Link to="/addPassword">
				<button type="button">Password</button>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="key"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-key fa-w-16 fa-5x"
				>
					<path
						fill="currentColor"
						d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
						className=""
					/>
				</svg>
			</Link>
			<Link to="/addSecureNote">
				<button type="button">Secure Note</button>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fad"
					data-icon="sticky-note"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-sticky-note fa-w-14 fa-5x"
				>
					<g className="fa-group">
						<path
							fill="currentColor"
							d="M448 352H336a16 16 0 0 0-16 16v112H24a23.94 23.94 0 0 1-24-23.88V56a23.94 23.94 0 0 1 23.88-24H424a23.94 23.94 0 0 1 24 23.88V352z"
							className="fa-secondary"
						/>
						<path
							fill="currentColor"
							d="M320 480V368a16 16 0 0 1 16-16h112v6.1a23.9 23.9 0 0 1-7 16.9l-98 98a24 24 0 0 1-17 7z"
							className="fa-primary"
						/>
					</g>
				</svg>
			</Link>
			<Link to="/addAddress">
				<button type="button">Address</button>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fal"
					data-icon="address-book"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-address-book fa-w-14 fa-5x"
				>
					<path
						fill="currentColor"
						d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64v-32h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-52 288c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h288c17.6 0 32 14.4 32 32v384zM208 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 326.1 96 339 96 352.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-39.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-39.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"
						className=""
					/>
				</svg>
			</Link>
			<Link to="/addPaymentMethod">
				<button type="button">Payment Method</button>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="credit-card"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-credit-card fa-w-18 fa-5x"
				>
					<path
						fill="currentColor"
						d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
						className=""
					/>
				</svg>
			</Link>
			<Link to="/addBank">
				<button type="button">Bank</button>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="university"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-university fa-w-16 fa-5x"
				>
					<path
						fill="currentColor"
						d="M472 440h-8v-56c0-13.255-10.745-24-24-24h-16V208h-48v152h-48V208h-48v152h-48V208h-48v152h-48V208H88v152H72c-13.255 0-24 10.745-24 24v56h-8c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zm-56 0H96v-32h320v32zm72.267-322.942L271.179 26.463a48.004 48.004 0 0 0-30.358 0L23.733 117.058A11.999 11.999 0 0 0 16 128.274V156c0 6.627 5.373 12 12 12h20v12c0 6.627 5.373 12 12 12h392c6.627 0 12-5.373 12-12v-12h20c6.627 0 12-5.373 12-12v-27.726c0-4.982-3.077-9.445-7.733-11.216zM64 144l192-72 192 72H64z"
						className=""
					/>
				</svg>
			</Link>
		</div>
	</div>
);
export default AddItem;
