import { Routes, Route } from "react-router-dom";
import CreatePeople from "../components/Forms/CreatePeople";
import AddCompany from "../components/Forms/AddCompany";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Admin from "../components/Admin/Admin";
import Candidate from "../components/Candidate/Candidates";
import Client from "../components/Client/Clients";
import Recruiters from "../components/Recruiter/Recruiters";
import FormUpdatePeople from "../components/Forms/FormUpdatePeople";
import CreateJobPost from "../components/Forms/CreateJobPost";

import React from "react";

function RoutesAdmin() {
	const tipoAdmin = 0;
	const tipoCandidato = 1;
	const tipoCliente = 2;
	const tipoRecruiter = 3;
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Admin' element={<Admin personTypeId={tipoAdmin} />} />
			<Route path='/Admin/add' element={<CreatePeople />} />
			<Route
				path='/Candidate'
				element={<Candidate personTypeId={tipoCandidato} />}
			/>
			<Route path='/Candidate/add' element={<CreatePeople />} />
			<Route
				path='/Client'
				element={<Client personTypeId={tipoCliente} />}
			/>
			<Route path='/Client/add' element={<AddCompany />} />
			<Route
				path='/Recruiter'
				element={<Recruiters personTypeId={tipoRecruiter} />}
			/>
			<Route path='/Recruiter/add' element={<CreatePeople />} />
			<Route path='/People/update/:id' element={<FormUpdatePeople />} />
			<Route path='/Empresa' element={<addCompany />} />
			<Route path='/JobPosting/add' element={<CreateJobPost />} />
		</Routes>
	);
}

export default RoutesAdmin;
