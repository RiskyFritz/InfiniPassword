import React from 'react';
import { useParams } from 'react-router';

const Id: React.FC = () => {
	const params = useParams<{ id: string }>();
	return <div>{params.id}</div>;
};

export default Id;
