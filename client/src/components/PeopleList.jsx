import React from "react";
import Persona from "./Forms/Persona";
import { Table } from "react-bootstrap";

function PeopleList(props) {
	const { personaTipo } = props;
	return (
		<>
			{personaTipo ? (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
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
