import React from "react";
// import { useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import FormUpdateModal from "./Modals/FormUpdateModal";

function PeopleList(props) {
	let { personaTipo } = props;
	// const dispatch = useDispatch();
	const paginacionOpciones = {
		rowsPerPageText: "Rows Per Page",
		rangeSeparatorText: "of",
		selectAllRowsItem: true,
		selectAllRowsItemText: "All",
	};
	const columns = [
		{
			name: "First Name",
			selector: (row) => row.nombre,
			sortable: true,
		},
		{
			name: "Last Name",
			selector: (row) => row.apellido,
			sortable: true,
		},
		{
			name: "Email",
			selector: (row) => row.mail,
			sortable: true,
		},
		{
			name: "Phone",
			selector: (row) => row.telMovil,
			sortable: true,
		},
		{
			name: "Country",
			selector: (row) => row.domPais,
			sortable: true,
		},
		{
			key: "action",
			text: "Action",
			className: "action",
			sortable: false,
			compact: true,
			cell: (e) => {
				return (
					<>
						<FormUpdateModal personId={e.personaId} />
					</>
				);
			},
		},
	];
	return (
		<>
			{personaTipo ? (
				<DataTable
					columns={columns}
					data={personaTipo}
					selectableRows
					fixedHeader
					fixedHeaderScrollHeight='430px'
					pagination
					paginationComponentOptions={paginacionOpciones}
					noDataComponent=''
					striped={true}
				/>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default PeopleList;
