import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
function Candidates() {
	const dispatch = useDispatch();
	const personas = useSelector((state) => state.personasInfo);
	const tipoCandidato = 3;
	const candidatos = personas.filter(
		(e) => e.PersonaTipo_Id === tipoCandidato
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);
	return (
		<>
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
