import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectTwo.css';

const SelectTwo = () => {
	const [selected, setSelected] = useState('');
	return (
		<div className="flex flex-row justify-around m-4 outline-none text-base rounded-3xl box-border h-8 w-72 bg-gray-800 opacity-80">
			<Link
				className="rounded-3xl box-border pl-11 pr-11 h-8 text-blue-700 font-semibold"
				to=""
				onClick={() => {
					setSelected('recent');
					if (selected === 'recent') {
						// add highlight class to recent
						document.body.classList.remove('highlight-generate');
						document.body.classList.add('highlight-recent');
					}
				}}
			>
				Recent
			</Link>
			<Link
				className="rounded-3xl box-border pl-11 pr-11 h-8 font-semibold opacity-80 highlight-generate {text-blue-500 opacity-100 bg-gray-700 border-solid border-2 border-blue-500}"
				to=""
				onClick={() => {
					setSelected('generate');
					if (selected === 'generate') {
						// add highlight class
						document.body.classList.remove('highlight-recent');
						document.body.classList.add('highlight-generate');
					}
				}}
			>
				Generate
			</Link>
		</div>
	);
};
export default SelectTwo;
