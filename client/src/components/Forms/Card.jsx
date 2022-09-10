import React from "react";
import { Button } from "react-bootstrap";
export default function Card({ persona_Id, nombre, apellido }) {
	return (
		<tr>
			<td>{persona_Id}</td>
			<td>{nombre}</td>
			<td>{apellido}</td>
			<td>{<Button className='primary'>Editar</Button>}</td>
		</tr>
	);
}
