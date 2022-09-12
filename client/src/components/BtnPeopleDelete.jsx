import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserById } from "../actions";
import { Button } from "react-bootstrap";

function BtnPeopleDelete({ id }) {
	// Con e.preventDefault evitamos que al montar un componente se ejecute el boton
	const dispatch = useDispatch();
	const handleOnDelete = (e, id) => {
		e.preventDefault();
		dispatch(deleteUserById(id));
	};
	return (
		<Button variant='danger' onClick={(e) => handleOnDelete(e, id)}>
			Delete
		</Button>
	);
}

export default BtnPeopleDelete;
