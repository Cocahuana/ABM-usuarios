import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function BtnPeopleUpdate({ id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleOnUpdate = (e, id) => {
		e.preventDefault();
		navigate(`/People/update/${id}`);
	};
	return (
		<Button variant='primary' onClick={(e) => handleOnUpdate(e, id)}>
			Update
		</Button>
	);
}

export default BtnPeopleUpdate;
