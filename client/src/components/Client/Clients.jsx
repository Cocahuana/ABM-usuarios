import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";

function Clients() {
	const dispatch = useDispatch();
	const { personasInfo } = useSelector((state) => state);
	const tipoCliente = 2;
	const cliente = personasInfo.filter(
		(e) => e.PersonaTipo_Id === tipoCliente
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);
	return (
		<>
			<SearchBar personaTipoId={tipoCliente} />

			<PeopleList personaTipo={cliente} />

			<Button as={Link} to='/Client/add' className='primary'>
				Add Client
			</Button>
			<Button as={Link} to='/' className='btn btn-light'>
				Go back
			</Button>
		</>
	);
}

export default Clients;
