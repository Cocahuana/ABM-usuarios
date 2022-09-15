import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";
function Recruiters() {
	const dispatch = useDispatch();
	const { personasInfo } = useSelector((state) => state);
	const tipoRecruiter = 3;
	const recruiters = personasInfo.filter(
		(e) => e.PersonaTipo_Id === tipoRecruiter
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	return (
		<>
			<SearchBar personaTipoId={tipoRecruiter} />
			<PeopleList personaTipo={recruiters} />

			<Button as={Link} to='/Recruiter/add' className='primary'>
				Add Recruiter
			</Button>
			<Button as={Link} to='/' className='btn btn-light'>
				Go back
			</Button>
		</>
	);
}

export default Recruiters;
