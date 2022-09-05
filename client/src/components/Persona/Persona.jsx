import React from "react";

export default function Persona({ persona }) {
	return (
		<tr>
			<td>{persona.Persona_Id}</td>
			<td>{persona.Nombre}</td>
			<td>{persona.Apellido}</td>
			<td>{persona.DocTipo}</td>
			<td>{persona.DocNro}</td>
			<td>{persona.mail}</td>
			<td>{persona.TelLaboral}</td>
			<td>{persona.TelMovil}</td>
			<td>{persona.TelPersonal}</td>
			<td>{persona.Linkedin}</td>
			<td>{persona.CV}</td>
			<td>{persona.PersonaTipo_Id}</td>
			<td>{persona.DomCalle}</td>
			<td>{persona.DomAltura}</td>
			<td>{persona.DomLocalidad}</td>
			<td>{persona.DomProvincia}</td>
			<td>{persona.DomPais}</td>
			<td>{persona.DomCP}</td>
		</tr>
	);
}
