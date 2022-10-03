import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getPersonas} from "../../actions/personas";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "@chakra-ui/react";
// import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";
import {Box, Stack, Input, InputGroup, Button} from "@chakra-ui/react";
function Admin({personTypeId}) {
	const dispatch = useDispatch();
	let {personasInfo} = useSelector((state) => state);

	let admins = personasInfo.filter((e) => e.personaTipoId === personTypeId);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getPersonas());
		if (admins) setLoading(true);
	}, [dispatch]);

	return (
		<>
			{loading === false ? (
				<Stack
					w='100%'
					h='90vh'
					direction={"column"}
					justify='center'
					align={"center"}>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
						size='xl'
						justifyContent={"center"}
					/>
				</Stack>
			) : (
				<Stack
					direction={"column"}
					justify='center'
					align={"center"}
					padding='10px'>
					<SearchBar personaTipoId={personTypeId} />

					<PeopleList personaTipo={admins} />

					<Button as={Link} to='/Admin/add' className='primary'>
						Add Admin
					</Button>
					<Button as={Link} to='/' className='btn btn-light'>
						Go back
					</Button>
				</Stack>
			)}
		</>
	);
}

export default Admin;
