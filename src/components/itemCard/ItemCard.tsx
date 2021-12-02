import './ItemCard.css';
import ScaleButton from '../ScaleButton/ScaleButton';

interface ItemCardProps {
	name: string;
	folder: string;
	username: string;
	password: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
	name,
	folder,
	username,
	password,
}) => (
	<div className="item-container">
		<div className="value-container">
			<div className="name-value">{name}</div>
			<div className="folder-value">{folder}</div>
			<div className="url-value">{username}</div>
			<div className="username-value">{password}</div>
		</div>
		<div className="action-container">
			<ScaleButton
				className="copy-password"
				type="button"
				onClick={() =>
					// copy password to clipboard
					navigator.clipboard.writeText(password)
				}
			/>
			<button className="show-password" type="button">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="eye"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					className="svg-inline--fa fa-eye fa-w-18 fa-5x"
					style={{ width: '1rem' }}
				>
					<path
						fill="currentColor"
						d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
						className=""
					/>
				</svg>
			</button>
			<button className="edit-button" type="button">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="pencil"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className="svg-inline--fa fa-pencil fa-w-16 fa-5x"
					style={{ width: '1rem' }}
				>
					<path
						fill="currentColor"
						d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
						className=""
					/>
				</svg>
			</button>
			<button className="delete-button" type="button">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fal"
					data-icon="trash-alt"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="svg-inline--fa fa-trash-alt fa-w-14 fa-5x"
					style={{ width: '1rem' }}
				>
					<path
						fill="currentColor"
						d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
						className=""
					/>
				</svg>
			</button>
		</div>
	</div>
);
export default ItemCard;
