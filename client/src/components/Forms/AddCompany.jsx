import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Link } from "react-router-dom";
import BtnGoBack from "../Buttons/BtnGoBack";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { createCompany } from "../../actions";

function validate(company) {
	let {
		nombre,
		telPrincipal,
		telSecundario,
		telFax,
		domCalle,
		domAltura,
		domCp,
	} = company;
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
		errors.nombre = "Company name can not include whitespaces :,(";
	if (!hasFirstUpper.test(nombre))
		errors.nombre = "First letter should be Uppercase";
	// if (!isAlphabetical.test(nombre))
	// 	errors.nombre = "Company name can not include special characters";
	if (nombre.length >= 45)
		errors.nombre = "Company name can not be longer to 45 characters";

	/* telPrincipal validations start */

	if (!telPrincipal) errors.telPrincipal = "Principal phone is required";
	if (!hasOnlyDigits.test(telPrincipal))
		errors.telPrincipal = "Only numbers are allowed in this input";
	if (telPrincipal.length <= 5 || telPrincipal.length >= 20)
		errors.telPrincipal =
			"Principal phone must have between 5 and 20 numbers";

	/* telSecundario validations start */

	if (telSecundario.length > 0) {
		if (telSecundario.length <= 5 || telSecundario.length >= 20)
			errors.telSecundario =
				"Secondary Phone must have between 5 and 20 numbers";
		if (!hasOnlyDigits.test(telSecundario))
			errors.telSecundario = "Only numbers are allowed in this input";
	}

	/* telFax validations start */

	if (telFax.length > 0) {
		if (telFax.length <= 5 || telFax.length >= 20)
			errors.telFax = "Fax number must have between 5 and 20 digits";
		if (!hasOnlyDigits.test(telFax))
			errors.telFax = "Only numbers are allowed in this input";
	}

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

export default function AddCompany() {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [company, setCompany] = useState({
		nombre: "",
		telPrincipal: "",
		telSecundario: "",
		telFax: "",
		domCalle: "",
		domAltura: "",
		domLocalidad: "",
		domProvincia: "",
		domPais: "",
		domCp: "",
		webSite: "",
		keyTechnologies: "",
	});

	// const companys = useSelector((state) => state.companysInfo);

	// useEffect(() => {
	// 	dispatch(getcompanys());
	// }, [dispatch]);

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
		dispatch(createCompany(company));
		setCompany({
			nombre: "",
			telPrincipal: "",
			telSecundario: "",
			telFax: "",
			domCalle: "",
			domAltura: "",
			domLocalidad: "",
			domProvincia: "",
			domPais: "",
			domCp: "",
			webSite: "",
			keyTechnologies: "",
		});
	}

	function handleOnChange(e) {
		let { name, value } = e.target;

		// Los selects no devuelven un name, por lo que el value del e.target
		// se lo tenemos que asignar al value del key de nuestro useState

		setCompany({
			...company,
			[name]: value,
		});
		setErrors(
			validate({
				...company,
				[name]: value,
			})
		);
	}

	return (
		<div>
			<Form className='p-4' onSubmit={handleSubmit}>
				<h3>Company</h3>
				<fieldset style={{ border: "3px solid" }} className='px-2'>
					<legend className='float-none w-auto p-2'>
						Company Information
					</legend>
					{/* <label>company Id</label> */}
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Company Name *</Form.Label>
							<Form.Control
								type='text'
								placeholder='Microsoft'
								name='nombre'
								required
								value={company.nombre}
								isInvalid={errors.nombre}
								isValid={!errors.nombre}
								onChange={(e) => handleOnChange(e)}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.nombre}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Key Technologies *</Form.Label>
							<Form.Control
								type='text'
								required
								placeholder='React, bootstrap'
								name='keyTechnologies'
								value={company.keyTechnologies}
								isInvalid={errors.keyTechnologies}
								isValid={!errors.keyTechnologies}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.keyTechnologies}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Web Site</Form.Label>
							<Form.Control
								type='text'
								name='webSite'
								placeholder='https://www.microsoft.com/ (optional)'
								value={company.webSite}
								isInvalid={errors.webSite}
								isValid={!errors.webSite}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.webSite}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Principal Phone *</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +1 888-888-8888'
								name='telPrincipal'
								required
								value={company.telPrincipal}
								isInvalid={errors.telPrincipal}
								isValid={!errors.telPrincipal}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telPrincipal}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Secondary Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +10 23-999-9999'
								name='telSecundario'
								value={company.telSecundario}
								isInvalid={errors.telSecundario}
								isValid={!errors.telSecundario}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telSecundario}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Fax Number</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ex: +54 9 11-222-3333'
								name='telFax'
								value={company.telFax}
								isInvalid={errors.telFax}
								isValid={!errors.telFax}
								onChange={handleOnChange}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.telFax}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
				</fieldset>
				<fieldset style={{ border: "3px solid" }} className='px-2'>
					<legend className='float-none w-auto p-2'>
						Contact Information
					</legend>

					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Country</Form.Label>
							<Select
								options={pais}
								Searchable
								Clearable
								onChange={(e) =>
									setCompany({
										...company,
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
									setCompany({
										...company,
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
									setCompany({
										...company,
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
								placeholder='Florida (optional)'
								name='domCalle'
								value={company.domCalle}
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
								placeholder='10327 (optional)'
								name='domAltura'
								value={company.domAltura}
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
								placeholder='Postal Code (optional)'
								name='domCp'
								value={company.domCp}
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
							company.nombre.length > 0
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
