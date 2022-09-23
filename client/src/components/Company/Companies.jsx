import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getCompanies} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import PeopleList from "../PeopleList";
import SearchBar from "../SearchBar";
function Companies() {
	const dispatch = useDispatch();
	// const { personasInfo } = useSelector((state) => state);
	// const recruiters = personasInfo.filter(
	// 	(e) => e.personaTipoId === personTypeId
	// );
	useEffect(() => {
		dispatch(getCompanies());
	}, [dispatch]);

	return (
		<>
			<Button as={Link} to='/Company/add' className='primary'>
				Add Company
			</Button>
			<Button as={Link} to='/' className='btn btn-light'>
				Go back
			</Button>
		</>
	);
}

export default Companies;
