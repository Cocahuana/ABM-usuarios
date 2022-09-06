import React, { useState, useEffect } from "react";
import { getPersonas } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Personas() {
	const dispatch = useDispatch();
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
		console.log();
	}

	return (
		<div>
			<Form style={{ padding: "10px" }}>
				<fieldset style={{ border: "3px solid" }}>
					<legend className='float-none w-auto p-2'>
						Datos Personales
					</legend>
					{/* <label>Persona Id</label> */}
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el nombre'
							/>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Apellido</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Apellido'
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Tipo de documento</Form.Label>
							<Select options={tipoDocumento} />
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Nº Documento</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Nº Documento'
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='ejemplo@gmail.com'
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Tel. Movil</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Movil'
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Tel. Personal</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Personal'
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Tel. Laboral</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese el Tel. Laboral'
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Linkedin</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese la url de su Linkedin'
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>CV</Form.Label>
							<Form.Control type='file' />
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Persona tipo id</Form.Label>

							<Select options={options} />
						</Form.Group>
					</Row>
				</fieldset>
				<fieldset style={{ border: "3px solid" }}>
					<legend className='float-none w-auto p-2'>
						Datos de Locación
					</legend>

					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Pais</Form.Label>
							<Select options={pais} />
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Provincia</Form.Label>
							<Select options={provincia} />
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Localidad</Form.Label>
							<Select options={localidad} />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Calle</Form.Label>
							<Form.Control
								type='text'
								placeholder='Nombre de la Calle'
							/>
						</Form.Group>

						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Altura</Form.Label>
							<Form.Control
								type='text'
								placeholder='Altura de la calle'
							/>
						</Form.Group>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>CP</Form.Label>

							<Form.Control
								type='text'
								placeholder='Codigo postal'
							/>
						</Form.Group>
					</Row>
				</fieldset>
				<div className='m-2 d-flex justify-content-end'>
					<Button
						type='submit'
						onClick={(e) => handleSubmit(e)}
						className='btn btn-primary'>
						<i className='fa fa-save'></i> Guardar
					</Button>
					<Button className='btn btn-light'>Vovler al listado</Button>
				</div>
			</Form>
		</div>
	);
}
