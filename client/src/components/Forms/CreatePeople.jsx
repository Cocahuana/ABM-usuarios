import React, { useState, useEffect } from "react";
import { createPerson, getPersonas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import BtnGoBack from "../BtnGoBack";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { validate } from "./PeopleValidation";
import { useToast } from "@chakra-ui/react";

export default function CreatePeople() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();
	const toastTitle = "Success";
	const toastDescription = "Person Created successfully";
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [persona, setPersona] = useState({
		//personaId debe ser autoIncremental DESDE EL FRONT :/
		personaId: undefined,
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
		personaTipoId: undefined,
		domCalle: "",
		domAltura: "",
		domLocalidad: "",
		domProvincia: "",
		domPais: "",
		domCp: "",
	});

	useEffect(() => {
		dispatch(getPersonas());
	}, [dispatch]);

	const options = [
		{ value: 0, label: "Admin" },
		{ value: 1, label: "Candidate" },
		{ value: 2, label: "Client" },
		{ value: 3, label: "Recruiter" },
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
		dispatch(createPerson(persona)).then((res) => {
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
			navigate(-1);
			toast({
				title: toastTitle,
				description: toastDescription,
				status: "success",
				duration: 9000,
				isClosable: true,
			});
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
			<Form className='p-4' onSubmit={handleSubmit}>
				<h3>Some People Type</h3>
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
								placeholder='Ex: 99.999.999'
								name='docNro'
								value={persona.docNro}
								isInvalid={errors.docNro}
								isValid={!errors.docNro}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.docNro}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='example@gmail.com'
								name='mail'
								value={persona.mail}
								isInvalid={errors.mail}
								isValid={!errors.mail}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.mail}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +1 888-888-8888'
								name='telMovil'
								value={persona.telMovil}
								isInvalid={errors.telMovil}
								isValid={!errors.telMovil}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telMovil}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Personal Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +10 23-999-9999'
								name='telPersonal'
								value={persona.telPersonal}
								isInvalid={errors.telPersonal}
								isValid={!errors.telPersonal}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telPersonal}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Business Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +54 9 11-222-3333'
								name='telLaboral'
								value={persona.telLaboral}
								isInvalid={errors.telLaboral}
								isValid={!errors.telLaboral}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telLaboral}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Linkedin</Form.Label>
							<Form.Control
								type='text'
								placeholder='https://linkedin.com/in/myLinkedin-profile'
								name='linkedin'
								value={persona.linkedin}
								isInvalid={errors.linkedin}
								isValid={!errors.linkedin}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.linkedin}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Resume / CV</Form.Label>
							<Form.Control
								required
								type='file'
								name='cv'
								value={persona.cv}
								isInvalid={errors.cv}
								isValid={!errors.cv}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.cv}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Not use</Form.Label>
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
								isInvalid={errors.domCalle}
								isValid={!errors.domCalle}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.domCalle}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Street Nº</Form.Label>
							<Form.Control
								type='text'
								placeholder='10327'
								name='domAltura'
								value={persona.domAltura}
								isInvalid={errors.domAltura}
								isValid={!errors.domAltura}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.domAltura}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Postal Code</Form.Label>

							<Form.Control
								type='text'
								placeholder='Postal Code'
								name='domCp'
								value={persona.domCp}
								isInvalid={errors.domCp}
								isValid={!errors.domCp}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.domCp}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
				</fieldset>
				<div className='m-2 d-flex justify-content-end'>
					<Button
						type='submit'
						disabled={
							Object.values(errors).length === 0 &&
							persona.nombre.length > 0
								? false
								: true
						}
						onClick={(e) => handleSubmit(e)}
						className='btn btn-primary'>
						<i className='fa fa-save'></i> Save
					</Button>
					<BtnGoBack />
				</div>
			</Form>
		</div>
	);
}
