import './SearchBar.css';

const SearchBar = () => (
	<div className="flex flex-row items-center p-4 mt-2 mb-2 h-10">
		<input
			type="search"
			className="outline-none text-base font-normal bg-no-repeat rounded-l-3xl border-solid border-2 box-border h-10 flex pl-5 w-48 border-blue-700 hover:border-blue-500 focus:border-blue-500"
			placeholder="Search"
		/>
		<button
			type="button"
			className="rounded-r-3xl flex items-center justify-center pr-4 h-10 bg-blue-700 hover:bg-blue-500 focus:bg-blue-500"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="search"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className="w-4 ml-2 text-black"
			>
				<g className="fa-group">
					<path
						fill="currentColor"
						d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
					/>
					<path
						fill="currentColor"
						d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
					/>
				</g>
			</svg>
		</button>
	</div>
);
export default SearchBar;
