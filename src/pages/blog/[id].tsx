import React from "react";
import { useParams } from "react-router";

interface Props {}

const id = (props: Props) => {
	const params = useParams<{ id: string }>();
	console.log({ params });
	return <div>{params.id}</div>;
};

export default id;
