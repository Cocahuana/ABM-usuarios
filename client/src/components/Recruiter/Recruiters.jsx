import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getPersonas} from "../../actions/personas";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";
function Recruiters({personTypeId}) {
	const dispatch = useDispatch();
	const {personasInfo} = useSelector((state) => state);
	const recruiters = personasInfo.filter(
		(e) => e.personaTipoId === personTypeId
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	return (
		<>
			<SearchBar personaTipoId={personTypeId} />
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
