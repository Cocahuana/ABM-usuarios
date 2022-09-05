import React, { useState, useEffect } from "react";
import Persona from "../Persona/Persona";
import { getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
export default function Personas() {
	const dispatch = useDispatch();

	const personas = useSelector((state) => state.personasInfo);
	//DocTipo: D.N.I

	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	return (
		<div>
			<table>
				<tr>
					<th>Persona Id</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Tipo de documento</th>
					<th>Nº Documento</th>
					<th>Mail</th>
					<th>Tel. Movil</th>
					<th>Tel. Personal</th>
					<th>Tel. Laboral</th>
					<th>Linkedin</th>
					<th>CV</th>
					<th>Persona tipo id</th>
					<th>Calle</th>
					<th>Altura</th>
					<th>Localidad</th>
					<th>Provincia</th>
					<th>Pais</th>
					<th>CP</th>
				</tr>

				{personas ? (
					personas.map((persona) => {
						return <Persona persona={persona} />;
					})
				) : (
					<h2>Loading...</h2>
				)}
			</table>
			<div></div>
		</div>
	);
}
