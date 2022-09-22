import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import Select from "react-select";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getJobsPosting, createJobPosting } from "../../actions";
import BtnGoBack from "../BtnGoBack";
import CustomInput from "./CustomInput";
import { validateJobPosting } from "./validateJobPosting";
function CreateJobPost() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();
	const toastTitle = "Success";
	const toastDescription = "Job Posting Created successfully";
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [jobPost, setJobPost] = useState({
		idOrden: undefined,
		nombre: "",
		cantPuestos: "",
		competencias: "",
		duracion: "",
		skill: "",
		empresaId: "",
		ciudad: "",
		accontManagerId: "",
		fInicioBusqueda: "",
		contratacionTipo: "",
		salario: "",
		preferenciaJob: "",
		preferenciaCiudad: "",
		preferenciaOrganismo: "",
		residencia: "",
		preguntas: "",
		jobLevel: "",
		jobTypeId: "",
		estudiosId: "",
		archivoPath: "",
		empresa: "",
		ordenEstado: "",
		candidatos: "",
	});

	useEffect(() => {
		return () => {
			dispatch(getJobsPosting());
		};
	}, [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(jobPost);
		// dispatch(createJobPosting(jobPost)).then((res) => {
		// 	setJobPost({
		// 		idOrden: undefined,
		// 		nombre: "",
		// 		cantPuestos: "",
		// 		competencias: "",
		// 		duracion: "",
		// 		skill: "",
		// 		empresaId: "",
		// 		ciudad: "",
		// 		accontManagerId: "",
		// 		fInicioBusqueda: "",
		// 		contratacionTipo: "",
		// 		salario: "",
		// 		preferenciaJob: "",
		// 		preferenciaCiudad: "",
		// 		preferenciaOrganismo: "",
		// 		residencia: "",
		// 		preguntas: "",
		// 		jobLevel: "",
		// 		jobTypeId: "",
		// 		estudiosId: "",
		// 		archivoPath: "",
		// 		empresa: "",
		// 		ordenEstado: "",
		// 		candidatos: "",
		// 	});
		// 	navigate(-1);
		// 	toast({
		// 		title: toastTitle,
		// 		description: toastDescription,
		// 		status: "success",
		// 		duration: 9000,
		// 		isClosable: true,
		// 	});
		// });
	}

	function handleOnChange(e) {
		let { name, value } = e.target;

		// Los selects no devuelven un name, por lo que el value del e.target
		// se lo tenemos que asignar al value del key de nuestro useState

		setJobPost({
			...jobPost,
			[name]: value,
		});
		setErrors(
			validateJobPosting({
				...jobPost,
				[name]: value,
			})
		);
	}

	const candidatos = [{ value: 1, label: 2 }];
	let arreglo = [];
	for (const key in jobPost) {
		arreglo.push(key);
	}

	const imprimirInputs = () => {
		return arreglo.map((e) => {
			return (
				<Form.Group as={Col} className='mb-3'>
					<Form.Label>{e}</Form.Label>
					<Form.Control
						type='text'
						placeholder='John'
						name={e}
						required
						value={jobPost.e}
						isInvalid={errors.e}
						isValid={!errors.e}
						onChange={(e) => handleOnChange(e)}
					/>
					<Form.Control.Feedback type='invalid'>
						{errors.e}
					</Form.Control.Feedback>
				</Form.Group>
			);
		});
	};

	return (
		<div>
			<Form className='p-4' onSubmit={handleSubmit}>
				<h3>Job Posting</h3>
				<fieldset style={{ border: "3px solid" }} className='px-2'>
					<legend className='float-none w-auto p-2'>
						About candidate
					</legend>
					<Row>
						<CustomInput
							title={"Post Title"}
							name={"nombre"}
							type={"text"}
							placeholder={"FullStack Developer"}
							value={jobPost.nombre}
							errors={errors.nombre}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						
					</Row>
					<Row>
						<Form.Group as={Col} className='mb-3'>
							<Form.Label>Candidatos</Form.Label>
							<Select
								name='candidates'
								options={candidatos}
								Searchable
								onChange={(e) =>
									setJobPost({
										...jobPost,
										candidatos: e.value,
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
				</fieldset>
				<div className='m-2 d-flex justify-content-end'>
					<Button
						type='submit'
						disabled={
							Object.values(errors).length === 0 &&
							jobPost.nombre.length > 0
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

export default CreateJobPost;
