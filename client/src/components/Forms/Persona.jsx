import React from "react";
import { Button } from "react-bootstrap";
import BtnPeopleDelete from "../BtnPeopleDelete";
import BtnPeopleUpdate from "../BtnPeopleUpdate";
export default function Persona(props) {
	let { persona_Id, nombre, apellido, mail } = props;
	const propiedades = [persona_Id, nombre, apellido, mail];
	return (
		<tr>
			{propiedades.map((propiedad) => (
				<td>{propiedad}</td>
			))}
			<td>
				<BtnPeopleUpdate id={persona_Id} />
				<BtnPeopleDelete id={persona_Id} />
			</td>
		</tr>
	);
}
