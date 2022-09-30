import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useToast} from "@chakra-ui/react";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {createJobPosting} from "../../actions";
import BtnGoBack from "../Buttons/BtnGoBack";
import CustomInput from "./CustomInput";
import DropdownEstudios from "./CustomSelects.jsx/DropdownEstudios";
import {validateJobPosting} from "./validateJobPosting";
import CustomSelect from "./CustomSelects.jsx/CustomSelect";
import DropdownCompanies from "./CustomSelects.jsx/DropdownCompanies";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import DropdownRecruiters from "./CustomSelects.jsx/DropdownRecruiters";

function CreateJobPost() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toast = useToast();
	const toastTitle = "Success";
	const toastDescription = "Job Posting Created successfully";
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);
	const [date, setDate] = useState(new Date());

	const [jobPost, setJobPost] = useState({
		nombre: "",
		cantPuestos: 0,
		ordenEstadoId: 1, //1 = Iniciada
		competencias: "",
		duracion: "",
		skill: "",
		empresaId: "",
		ciudad: "",
		accontManagerId: 1,
		fInicioBusqueda: "",
		contratacionTipo: "",
		salario: 0,
		preferenciaJob: "",
		preferenciaCiudad: "",
		preferenciaOrganismo: "",
		residencia: "",
		preguntas: "",
		jobLevel: "",
		jobDescription: "",
		jobTypeId: 1,
		estudiosId: 1,
		archivoPath: "",
		empresa: "Hardcoded Company here",
		ordenEstado: undefined,
		candidatos: "",
		recruiter: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		// Date is an object
		jobPost.fInicioBusqueda = jobPost.fInicioBusqueda.toISOString();
		console.log("Submit: ", jobPost);

		dispatch(createJobPosting(jobPost)).then((res) => {
			setJobPost({
				nombre: "",
				cantPuestos: 0,
				ordenEstadoId: 1,
				competencias: "",
				duracion: "",
				skill: "",
				empresaId: "",
				ciudad: "",
				accontManagerId: 1,
				fInicioBusqueda: "",
				contratacionTipo: "",
				salario: 0,
				preferenciaJob: "",
				preferenciaCiudad: "",
				preferenciaOrganismo: "",
				residencia: "",
				preguntas: "",
				jobLevel: "",
				jobDescription: "",
				jobTypeId: 1,
				estudiosId: 1,
				archivoPath: "",
				empresa: "",
				ordenEstado: undefined,
				candidatos: "",
				recruiter: "",
			});
			// navigate(-1);
			// toast({
			// 	title: toastTitle,
			// 	description: toastDescription,
			// 	status: "success",
			// 	duration: 9000,
			// 	isClosable: true,
			// });
		});
	}
	function handleDate(date) {
		// console.log("DateString: ", dateString);
		setJobPost({
			...jobPost,
			fInicioBusqueda: date,
		});
	}

	function handleOnChange(e) {
		let {name, value} = e.target;

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
		{value: 1, label: "Eze"},
		{value: 2, label: "Juan"},
		{value: 3, label: "Florencia"},
		{value: 4, label: "Marta"},
	];

	return (
		<>
			<Container>
				<Form className='p-4' onSubmit={handleSubmit}>
					<Row>
						{/* Red */}
						<fieldset
							style={{border: "1px solid"}}
							className='px-2'>
							<legend className='float-none w-auto p-2'>
								About Job Posting
							</legend>
							<Row>
								<CustomInput
									title={"Position Name"}
									name={"nombre"}
									type={"text"}
									placeholder={"FullStack Developer"}
									value={jobPost.nombre}
									errors={errors.nombre}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<DropdownRecruiters
									handleOnChange={(e) =>
										setJobPost({
											...jobPost,
											recruiter: e.value,
										})
									}
								/>

								<CustomInput
									title={"Account Manager"}
									name={"accontManagerId"}
									type={"number"}
									placeholder={"I am a select"}
									value={jobPost.accontManagerId}
									errors={errors.nombre}
								/>
								<Form.Group as={Col} className='mb-3'>
									<Form.Label>Start Date</Form.Label>
									<DatePicker
										dateFormat='MM/dd/yyyy'
										selected={date}
										value={jobPost.fInicioBusqueda}
										onChange={(fecha) => handleDate(fecha)}
										className='form-control'
									/>
								</Form.Group>
							</Row>
							<Row>
								<CustomInput
									title={"Openings"}
									name={"cantPuestos"}
									type={"number"}
									placeholder={4}
									value={jobPost.cantPuestos}
									errors={errors.cantPuestos}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								{/* <CustomInput
							title={"Tests (descolgable con examenes)"}
							name={"test"}
							type={"text"}
							placeholder={"I am a select"}
							value={"Not assigned yet"}
							errors={"errors.nombre"}
						/> */}
								<CustomInput
									title={"Attachments"}
									name={"archivoPath"}
									type={"file"}
									value={jobPost.archivoPath}
									errors={errors.archivoPath}
								/>
								{/* <CustomInput
							title={"Job Posting state"}
							name={"test"}
							type={"text"}
							placeholder={"I am a select"}
							value={"Not assigned yet"}
							errors={"errors.nombre"}
						/> */}
							</Row>
						</fieldset>
						{/* Green */}
						<fieldset
							style={{border: "3px solid"}}
							className='px-2'>
							<legend className='float-none w-auto p-2'>
								Ideal candidate profile
							</legend>
							<Row>
								<CustomInput
									title={"Main Skill"}
									name={"skill"}
									type={"text"}
									placeholder={"Javascript"}
									value={jobPost.skill}
									errors={errors.skill}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<CustomInput
									title={"Job Description"}
									name={"jobDescription"}
									type={"text"}
									placeholder={"What will you do? ..."}
									value={jobPost.jobDescription}
									errors={errors.jobDescription}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<CustomInput
									title={"Job Type"}
									name={"contratacionTipo"}
									type={"text"}
									placeholder={"Full time, part-time"}
									value={jobPost.contratacionTipo}
									errors={errors.contratacionTipo}
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
								<DropdownEstudios
									handleOnChange={(e) =>
										setJobPost({
											...jobPost,
											estudiosId: e.value,
										})
									}
								/>
							</Row>
						</fieldset>
					</Row>
					<Row>
						{/* Orange */}
						<fieldset
							style={{border: "3px solid"}}
							className='px-2'>
							<legend className='float-none w-auto p-2'>
								About the position
							</legend>
							<Row>
								{/* <CustomInput
							title={"State"}
							name={"duracion"}
							type={"text"}
							placeholder={"Colorado"}
							value={jobPost.duracion}
							errors={errors.duracion}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
								<CustomInput
									title={"Duration"}
									name={"duracion"}
									type={"text"}
									placeholder={
										"1 screening. 3 technical interviews"
									}
									value={jobPost.duracion}
									errors={errors.duracion}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								{/* <CustomInput
							title={"Job Type"}
							name={"contratacionTipo"}
							type={"text"}
							placeholder={"Full-time, part-time"}
							value={jobPost.contratacionTipo}
							errors={errors.contratacionTipo}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
								<CustomInput
									title={"Salary"}
									name={"salario"}
									type={"text"}
									placeholder={"1500 - 1800"}
									value={jobPost.salario}
									errors={errors.salario}
									handleOnChange={(e) => handleOnChange(e)}
								/>
							</Row>
							<Row>
								<CustomInput
									title={"Preferred Jobs"}
									name={"preferenciaJob"}
									type={"text"}
									placeholder={"Open to relocate"}
									value={jobPost.preferenciaJob}
									errors={errors.preferenciaJob}
									handleOnChange={(e) => handleOnChange(e)}
								/>

								<CustomInput
									title={"Preferred Locations"}
									name={"preferenciaCiudad"}
									type={"text"}
									placeholder={"Boston"}
									value={jobPost.preferenciaCiudad}
									errors={errors.preferenciaCiudad}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<CustomInput
									title={"Preferred Organizations"}
									name={"preferenciaOrganismo"}
									type={"text"}
									placeholder={"Microsoft"}
									value={jobPost.preferenciaOrganismo}
									errors={errors.preferenciaOrganismo}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<CustomInput
									title={"Place of Residence"}
									name={"residencia"}
									type={"text"}
									placeholder={"Uk, London"}
									value={jobPost.residencia}
									errors={errors.residencia}
									handleOnChange={(e) => handleOnChange(e)}
								/>
							</Row>
						</fieldset>
						{/* Yellow */}
						<fieldset
							style={{border: "3px solid"}}
							className='px-2'>
							<legend className='float-none w-auto p-2'>
								Company Information
							</legend>
							<Row>
								<DropdownCompanies
									handleOnChange={(e) =>
										setJobPost({
											...jobPost,
											empresaId: e.value,
										})
									}
								/>
								{/* <CustomInput
							title={"Department"}
							name={"ciudad"}
							type={"text"}
							placeholder={"RRHH"}
							value={jobPost.ciudad}
							errors={errors.ciudad}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
								{/* <CustomInput
							title={"Contact"}
							name={"ciudad"}
							type={"text"}
							placeholder={
								"Margaret, Head-Hunter RRHH department"
							}
							value={jobPost.ciudad}
							errors={errors.ciudad}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
								<CustomInput
									title={"City"}
									name={"ciudad"}
									type={"text"}
									placeholder={"Miami"}
									value={jobPost.ciudad}
									errors={errors.ciudad}
									handleOnChange={(e) => handleOnChange(e)}
								/>

								<CustomInput
									title={"Questions to the candidate"}
									name={"preguntas"}
									type={"text"}
									placeholder={
										"How Would You Describe Yourself?"
									}
									value={jobPost.preguntas}
									errors={errors.preguntas}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								<CustomInput
									title={"Job Level"}
									name={"jobLevel"}
									type={"text"}
									placeholder={"Junior Advanced, Senior"}
									value={jobPost.jobLevel}
									errors={errors.jobLevel}
									handleOnChange={(e) => handleOnChange(e)}
								/>
								{/* <CustomInput
							title={"Type from company job order"}
							name={"contratacionTipo"}
							type={"text"}
							placeholder={"Full-time, part-time"}
							value={jobPost.contratacionTipo}
							errors={errors.contratacionTipo}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
								{/* <CustomSelect
							title={"Candidates"}
							name='candidates'
							options={candidatos}
							handleOnChange={(e) =>
								setJobPost({
									...jobPost,
									candidatos: e.value,
								})
							}
						/> */}
								{/* <CustomInput
							title={"Employee status"}
							name={"ciudad"}
							type={"text"}
							placeholder={"Active"}
							value={jobPost.ciudad}
							errors={errors.ciudad}
							handleOnChange={(e) => handleOnChange(e)}
						/> */}
							</Row>
						</fieldset>
					</Row>
					<Row>
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
					</Row>
				</Form>
			</Container>
		</>
	);
}

export default CreateJobPost;
