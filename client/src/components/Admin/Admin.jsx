import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
// import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";
import { Box, Stack, Input, InputGroup, Button } from "@chakra-ui/react";
function Admin({ personTypeId }) {
	const dispatch = useDispatch();
	let { personasInfo } = useSelector((state) => state);

	let admins = personasInfo.filter((e) => e.personaTipoId === personTypeId);

	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	return (
		<>
			<Stack>
				<SearchBar personaTipoId={personTypeId} />

				<PeopleList personaTipo={admins} />

				<Button as={Link} to='/Admin/add' className='primary'>
					Add Admin
				</Button>
				<Button as={Link} to='/' className='btn btn-light'>
					Go back
				</Button>
			</Stack>
		</>
	);
}

export default Admin;
