import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";

function Candidates({ personTypeId }) {
	const dispatch = useDispatch();
	const { personasInfo } = useSelector((state) => state);

	const candidatos = personasInfo.filter(
		(e) => e.personaTipoId === personTypeId
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);
	return (
		<>
			<SearchBar personaTipoId={personTypeId} />

			<PeopleList personaTipo={candidatos} />

			<Button as={Link} to='/Candidate/add' className='primary'>
				Add Candidate
			</Button>
			<Button as={Link} to='/' className='btn btn-light'>
				Go back
			</Button>
		</>
	);
}

export default Candidates;
