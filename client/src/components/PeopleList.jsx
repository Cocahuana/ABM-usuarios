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
								key={e.Persona_Id}
								persona_Id={e.Persona_Id}
								nombre={e.Nombre}
								apellido={e.Apellido}
								docTipo={e.DocTipo}
								docNro={e.DocNro}
								mail={e.mail}
								telMovil={e.TelMovil}
								telPersonal={e.TelPersonal}
								telLaboral={e.TelLaboral}
								linkedin={e.Linkedin}
								cv={e.CV}
								personaTipo_Id={e.PersonaTipo_Id}
								domCalle={e.DomCalle}
								domAltura={e.DomAltura}
								domLocalidad={e.DomLocalidad}
								domProvincia={e.DomProvincia}
								domPais={e.DomPais}
								domCp={e.DomCP}
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
