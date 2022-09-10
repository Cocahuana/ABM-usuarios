import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Forms/Card";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
function Recruiters() {
	const dispatch = useDispatch();
	const personas = useSelector((state) => state.personasInfo);
	const tipoRecruiter = 4;
	const recruiters = personas.filter(
		(e) => e.PersonaTipo_Id === tipoRecruiter
	);
	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);
	return (
		<>
			{recruiters ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{recruiters?.map((e) => (
							<Card
								key={e.Persona_Id}
								persona_Id={e.Persona_Id}
								nombre={e.Nombre}
								apellido={e.Apellido}
							/>
						))}
					</tbody>
				</Table>
			) : (
				<h3>Loading...</h3>
			)}

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
