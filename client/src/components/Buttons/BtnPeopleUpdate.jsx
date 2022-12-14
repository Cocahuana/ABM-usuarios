import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function BtnPeopleUpdate({id}) {
	const navigate = useNavigate();
	const handleOnUpdate = (e, id) => {
		e.preventDefault();
		navigate(`/People/update/${id}`);
	};
	return (
		<Button variant='primary' onClick={(e) => handleOnUpdate(e, id)}>
			<i className='fas fa-user-edit'></i>
		</Button>
	);
}

export default BtnPeopleUpdate;
