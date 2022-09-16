import React, { useEffect } from "react";
import Persona from "./Forms/Persona";
import { Table, Stack, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { orderByFirstName, getPersonas } from "../actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

function PeopleList(props) {
	let { personaTipo } = props;
	const dispatch = useDispatch();

	function handleSortFirstName(e) {
		e.preventDefault();
		dispatch(orderByFirstName(e.target.value));
	}
	return (
		<>
			{personaTipo ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>
								{
									<Stack direction='horizontal' gap={2}>
										First Name{" "}
										<Button
											type='button'
											onClick={(e) =>
												handleSortFirstName(e)
											}
											value='ascendente'>
											<FaSortAlphaUp />
										</Button>
										<Button
											type='button'
											onClick={(e) =>
												handleSortFirstName(e)
											}
											value='descendente'>
											<FaSortAlphaDown />
										</Button>
									</Stack>
								}
							</th>
							<th>Last Name</th>
							<th>Mail</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{personaTipo?.map((e) => (
							<Persona
								key={e.personaId}
								persona_Id={e.personaId}
								nombre={e.nombre}
								apellido={e.apellido}
								docTipo={e.docTipo}
								docNro={e.docNro}
								mail={e.mail}
								telMovil={e.telMovil}
								telPersonal={e.telPersonal}
								telLaboral={e.telLaboral}
								linkedin={e.linkedin}
								cv={e.cv}
								personaTipo_Id={e.personaTipoId}
								domCalle={e.domCalle}
								domAltura={e.domAltura}
								domLocalidad={e.domLocalidad}
								domProvincia={e.domProvincia}
								domPais={e.domPais}
								domCp={e.domCP}
							/>
						))}
					</tbody>
				</Table>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default PeopleList;
