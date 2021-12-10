import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectTwo.css';

const SelectTwo = () => {
	const [selected, setSelected] = useState('');
	return (
		<div className="flex flex-row justify-around m-4 outline-none text-base rounded-3xl box-border h-8 w-72 bg-gray-800 opacity-80" />
	);
};
export default SelectTwo;
