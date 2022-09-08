import React, { useState, useEffect } from "react";
import { getPersonas } from "../../actions";
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

	const hasWhiteSpaces = /(?!^\s+$)^.*$/m;
	const isAlphabetical =
		/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	const hasFirstUpper =
		/^[A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	const isEmail = /\S\@\S+\S+/; // Expresion Regular para validar Emails.
	const hasOnlyDigits = /^\d+$/;

	/* Nombre validations start */

	if (!hasWhiteSpaces.test(nombre))
		errors.nombre = "First name can not include whitespaces :,(";
	if (!hasFirstUpper.test(nombre))
		errors.nombre = "First letter should be Uppercase";
	if (!isAlphabetical.test(nombre))
		errors.nombre = "First name can not include special characters";
	if (nombre.length >= 45)
		errors.nombre = "First name can not be longer to 45 characters";

	/* apellido validations start */

	if (!hasWhiteSpaces.test(apellido))
		errors.apellido = "Last name can not include whitespaces :/";
	if (!hasFirstUpper.test(apellido))
		errors.apellido = "Last letter should be Uppercase";
	if (!isAlphabetical.test(apellido))
		errors.apellido =
			"Last name can not include special characters or being lower than 1 character";
	if (apellido.length >= 45)
		errors.apellido = "Last name can not be longer to 45 characters";

	/* docTipo validations start */

	if (docTipo.length === 0) errors.docTipo = "No options selected";

	/* docNro validations start */

	if (!hasOnlyDigits.test(docNro))
		errors.docNro = "Only numbers are allowed in this input";
	if (docNro.length >= 20)
		errors.docNro = "ID can not be longer than 20 numbers";

	/* mail validations start */
	if (!mail) errors.mail = "A email is required";
	if (!hasWhiteSpaces.test(mail)) errors.mail = "Whitespaces are not allowed";
	if (mail.length <= 8 || mail.length >= 30)
		errors.mail = "email must have between 8 and 30 characters";
	if (!isEmail.test(mail))
		errors.mail = "Not a valid email. Ex: example@mail.com";

	/* telMovil validations start */

	if (!telMovil) errors.telMovil = "Phone is required";
	if (!hasOnlyDigits.test(telMovil))
		errors.telMovil = "Only numbers are allowed in this input";
	if (telMovil.length <= 5 || telMovil.length >= 20)
		errors.telMovil = "Phone must have between 5 and 20 numbers";

	/* telPersonal validations start */

	if (telPersonal.length > 0) {
		if (telPersonal.length <= 5 || telPersonal.length >= 20)
			errors.telPersonal = "Phone must have between 5 and 20 numbers";
		if (!hasOnlyDigits.test(telPersonal))
			errors.telPersonal = "Only numbers are allowed in this input";
	}

	/* telLaboral validations start */

	if (telLaboral.length > 0) {
		if (telLaboral.length <= 5 || telLaboral.length >= 20)
			errors.telLaboral = "Phone must have between 5 and 20 digits";
		if (!hasOnlyDigits.test(telLaboral))
			errors.telLaboral = "Only numbers are allowed in this input";
	}

	/* cv validations start */
	if (cv.length === 0) errors.cv = "Please, upload your Resume / CV";

	/* linkedin validations start */

	if (linkedin.length <= 5 || linkedin.length >= 100)
		errors.linkedin = "Linkedin must have between 5 and 100 characters";
	if (!linkedin) errors.linkedin = "Linkedin is required";

	/* Street validations start */
	if (domCalle.length > 0) {
		if (!hasWhiteSpaces.test(domCalle))
			errors.domCalle = "Street can not include whitespaces";
		if (!hasFirstUpper.test(domCalle))
			errors.domCalle = "Street should be Uppercase";
		if (!isAlphabetical.test(domCalle))
			errors.domCalle =
				"Street can not include special characters or being lower than 1 character";
		if (domCalle.length >= 45)
			errors.domCalle = "Street can not be longer to 45 characters";
	}
	/* Street Nº validations start */
	if (domAltura.length > 0) {
		if (domAltura.length <= 1 || domAltura.length >= 5)
			errors.domAltura =
				"Street Nº must have between 1 and 5 digits. Example: 82, 159, 10581";
		if (!hasOnlyDigits.test(domAltura))
			errors.domAltura = "Only numbers are allowed in this input";
	}
	/* Postal Code validations start */
	if (domCp.length > 0) {
		if (domCp.length <= 1 || domCp.length >= 10)
			errors.domCp =
				"Street Nº must have between 1 and 10 digits. Example: 1600, 628";
		if (!hasOnlyDigits.test(domCp))
			errors.domCp = "Only numbers are allowed in this input";
	}

	return errors;
}

export default function CreateCompany() {
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
		{ value: 0, label: "Admin" },
		{ value: 1, label: "Client" },
		{ value: 2, label: "Recruiter" },
		{ value: 3, label: "Candidate" },
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
		console.log(persona);
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
			<Form className='p-4' onSubmit={handleSubmit}>
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
							<Form.Label>Resume</Form.Label>
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
