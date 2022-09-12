import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";

function Admin() {
	const dispatch = useDispatch();
	const personas = useSelector((state) => state.personasInfo);
	const tipoAdmin = 0;
	const admins = personas.filter((e) => e.PersonaTipo_Id === tipoAdmin);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);
	return (
		<>
			<PeopleList personaTipo={admins} />

			<Button as={Link} to='/Admin/add' className='primary'>
				Add Admin
			</Button>
			<Button as={Link} to='/' className='btn btn-light'>
				Go back
			</Button>
		</>
	);
}

export default Admin;
