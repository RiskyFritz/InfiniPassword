import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BackButton from '../components/BackButton/BackButton';
import ActionContainer from '../components/ActionContainer/ActionContainer';

const ManagePasswords = () => (
	<div>
		<BackButton />
		<ActionContainer />
	</div>
);
export default ManagePasswords;
