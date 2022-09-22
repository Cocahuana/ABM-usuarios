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
import CustomSelect from "./CustomSelect";
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

	const candidatos = [
		{ value: 1, label: "Eze" },
		{ value: 2, label: "Juan" },
		{ value: 3, label: "Florencia" },
		{ value: 4, label: "Marta" },
	];

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
						<CustomInput
							title={"Positions to cover"}
							name={"cantPuestos"}
							type={"number"}
							placeholder={"4"}
							value={jobPost.cantPuestos}
							errors={errors.cantPuestos}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Competencies"}
							name={"competencias"}
							type={"text"}
							placeholder={"Active listener"}
							value={jobPost.competencias}
							errors={errors.competencias}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Duration"}
							name={"duracion"}
							type={"text"}
							placeholder={"1 screening. 3 technical interviews"}
							value={jobPost.duracion}
							errors={errors.duracion}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Skill"}
							name={"skill"}
							type={"text"}
							placeholder={"Javascript"}
							value={jobPost.skill}
							errors={errors.skill}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"City"}
							name={"ciudad"}
							type={"text"}
							placeholder={"Miami"}
							value={jobPost.ciudad}
							errors={errors.ciudad}
							handleOnChange={(e) => handleOnChange(e)}
						/>
					</Row>
					<Row>
						<CustomInput
							title={"Contract type"}
							name={"contratacionTipo"}
							type={"text"}
							placeholder={"Contractor"}
							value={jobPost.contratacionTipo}
							errors={errors.contratacionTipo}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Position Budget"}
							name={"salario"}
							type={"number"}
							placeholder={"1500"}
							value={jobPost.salario}
							errors={errors.salario}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Job preference"}
							name={"preferenciaJob"}
							type={"text"}
							placeholder={"Open to relocate"}
							value={jobPost.preferenciaJob}
							errors={errors.preferenciaJob}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"City preference"}
							name={"preferenciaCiudad"}
							type={"text"}
							placeholder={"Boston"}
							value={jobPost.preferenciaCiudad}
							errors={errors.preferenciaCiudad}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Company preference"}
							name={"preferenciaOrganismo"}
							type={"text"}
							placeholder={"Microsoft"}
							value={jobPost.preferenciaOrganismo}
							errors={errors.preferenciaOrganismo}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Residence"}
							name={"residencia"}
							type={"text"}
							placeholder={"Uk, London"}
							value={jobPost.residencia}
							errors={errors.residencia}
							handleOnChange={(e) => handleOnChange(e)}
						/>
						<CustomInput
							title={"Questions to the candidate"}
							name={"preguntas"}
							type={"text"}
							placeholder={"How Would You Describe Yourself?"}
							value={jobPost.preguntas}
							errors={errors.preguntas}
							handleOnChange={(e) => handleOnChange(e)}
						/>
					</Row>
					<Row>
						<CustomInput
							title={"Seniority"}
							name={"jobLevel"}
							type={"text"}
							placeholder={"Junior Advanced"}
							value={jobPost.jobLevel}
							errors={errors.jobLevel}
							handleOnChange={(e) => handleOnChange(e)}
						/>

						<CustomSelect
							title={"Candidates"}
							name='candidates'
							options={candidatos}
							handleOnChange={(e) =>
								setJobPost({
									...jobPost,
									candidatos: e.value,
								})
							}
						/>
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
