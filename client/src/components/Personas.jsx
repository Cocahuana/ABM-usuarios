import React, { useState, useEffect } from "react";
import { getPersonas } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Async, { useAsync } from "react-select/async";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function validate(persona) {
	let {
		nombre,
		apellido,
		docTipo,
		docNro,
		mail,
		telMovil,
		telPersonal,
		telLaboral,
		linkedin,
		cv,
		personaTipoId,
		domCalle,
		domAltura,
		domLocalidad,
		domProvincia,
		domPais,
		domCp,
	} = persona;
	let errors = {};
	if (nombre.length != 6) errors.nombre = "Name must be 6";
	if (apellido.length !== 3) errors.apellido = "Last name must be 3";

	return errors;
}

export default function Personas() {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [persona, setPersona] = useState({
		nombre: "",
		apellido: "",
		docTipo: "",
		docNro: "",
		mail: "",
		telMovil: "",
		telPersonal: "",
		telLaboral: "",
		linkedin: "",
		cv: "",
		personaTipoId: "",
		domCalle: "",
		domAltura: "",
		domLocalidad: "",
		domProvincia: "",
		domPais: "",
		domCp: "",
	});

	// const personas = useSelector((state) => state.personasInfo);
	//DocTipo: D.N.I

	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	const tipoDocumento = [
		{ value: 1, label: "L.E / DNI" },
		{ value: 4, label: "Carnet de Extranjeria" },
		{ value: 7, label: "Pasaporte" },
	];
	const pais = [
		{ value: "argentina", label: "Argentina" },
		{ value: "peru", label: "perú" },
		{ value: "chile", label: "Chile" },
	];
	const provincia = [
		{ value: "caba", label: "CABA" },
		{ value: "buenos aires", label: "Buenos Aires" },
		{ value: "cordoba", label: "Cordoba" },
	];
	const localidad = [
		{ value: "palermo", label: "Palermo" },
		{ value: "villa urquiza", label: "Villa Urquiza" },
		{ value: "avellaneda", label: "Avellaneda" },
	];

	function handleSubmit(e) {
		e.preventDefault();
		setPersona({
			nombre: "",
			apellido: "",
			docTipo: "",
			docNro: "",
			mail: "",
			telMovil: "",
			telPersonal: "",
			telLaboral: "",
			linkedin: "",
			cv: "",
			personaTipoId: "",
			domCalle: "",
			domAltura: "",
			domLocalidad: "",
			domProvincia: "",
			domPais: "",
			domCp: "",
		});
	}

	function handleOnChange(e) {
		let { name, value } = e.target;

		// Los selects no devuelven un name, por lo que el value del e.target
		// se lo tenemos que asignar al value del key de nuestro useState

		setPersona({
			...persona,
			[name]: value,
		});
		setErrors(
			validate({
				...persona,
				[name]: value,
			})
		);
	}

	return (
		<div>
			<Form style={{ padding: "10px" }} onSubmit={handleSubmit}>
				<fieldset style={{ border: "3px solid" }} className='px-2'>
					<legend className='float-none w-auto p-2'>
						Personal Information
					</legend>
					{/* <label>Persona Id</label> */}
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='John'
								name='nombre'
								required
								value={persona.nombre}
								isInvalid={errors.nombre}
								isValid={!errors.nombre}
								onChange={(e) => handleOnChange(e)}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.nombre}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Wexler'
								name='apellido'
								value={persona.apellido}
								isInvalid={errors.apellido}
								isValid={!errors.apellido}
								onChange={(e) => handleOnChange(e)}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.apellido}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>ID Type</Form.Label>
							<Select
								name='tipoDocumento'
								options={tipoDocumento}
								Searchable
								Clearable
								onChange={(e) =>
									setPersona({
										...persona,
										docTipo: e.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>ID Nº</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Nº Documento'
								name='docNro'
								value={persona.docNro}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='example@gmail.com'
								name='mail'
								value={persona.mail}
								onChange={handleOnChange}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Movil'
								name='telMovil'
								value={persona.telMovil}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Personal Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Personal'
								name='telPersonal'
								value={persona.telPersonal}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Business Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Laboral'
								name='telLaboral'
								value={persona.telLaboral}
								onChange={handleOnChange}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Linkedin</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese la url de su Linkedin'
								name='linkedin'
								value={persona.linkedin}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Resume</Form.Label>
							<Form.Control
								type='file'
								name='cv'
								value={persona.cv}
								onChange={handleOnChange}
							/>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Persona tipo id</Form.Label>

							<Select
								options={options}
								Searchable
								Clearable
								onChange={(e) =>
									setPersona({
										...persona,
										personaTipoId: e.value,
									})
								}
							/>
						</Form.Group>
					</Row>
				</fieldset>
				<fieldset style={{ border: "3px solid" }} className='px-2'>
					<legend className='float-none w-auto p-2'>
						Location Information
					</legend>

					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Country</Form.Label>
							<Select
								options={pais}
								Searchable
								Clearable
								onChange={(e) =>
									setPersona({
										...persona,
										domPais: e.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>State / Province</Form.Label>
							<Select
								options={provincia}
								Searchable
								Clearable
								onChange={(e) =>
									setPersona({
										...persona,
										domProvincia: e.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Depatment / Localidad</Form.Label>
							<Select
								options={localidad}
								Searchable
								Clearable
								onChange={(e) =>
									setPersona({
										...persona,
										domLocalidad: e.value,
									})
								}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Street</Form.Label>
							<Form.Control
								type='text'
								placeholder='Florida'
								name='domCalle'
								value={persona.domCalle}
								onChange={handleOnChange}
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Street Nº</Form.Label>
							<Form.Control
								type='text'
								placeholder='10327'
								name='domAltura'
								value={persona.domAltura}
								onChange={handleOnChange}
							/>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>PC</Form.Label>

							<Form.Control
								type='text'
								placeholder='Postal Code'
								name='domCp'
								value={persona.domCp}
								onChange={handleOnChange}
							/>
						</Form.Group>
					</Row>
				</fieldset>
				<div className='m-2 d-flex justify-content-end'>
					<Button
						type='submit'
						disabled={Object.values(errors).length}
						onClick={(e) => handleSubmit(e)}
						className='btn btn-primary'>
						<i className='fa fa-save'></i> Save
					</Button>
					<Button className='btn btn-light'>Go back</Button>
				</div>
			</Form>
		</div>
	);
}
