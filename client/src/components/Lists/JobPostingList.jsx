import DataTable from "react-data-table-component";
import BtnJobPostingUpdate from "../Buttons/BtnJobPostingUpdate";
function JobPostingList(props) {
	const {data, jobPostingStates} = props;
	const paginacionOpciones = {
		rowsPerPageText: "Rows Per Page",
		rangeSeparatorText: "of",
		selectAllRowsItem: true,
		selectAllRowsItemText: "All",
	};

	const getLabel = (datinha) => {
		if (datinha === 1) return "Iniciada";
		if (datinha === 2) return "Sin Facturar";
	};

	const columns = [
		{
			name: "Position name",
			selector: (row) => row.nombre,
			sortable: true,
		},
		{
			name: "Positions to cover",
			selector: (row) => row.cantPuestos,
			sortable: true,
		},
		{
			name: "Job Post State",
			selector: (row) => getLabel(row.ordenEstadoId),
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
				return <BtnJobPostingUpdate id={e.idOrden} />;
			},
		},
	];
	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				selectableRows
				fixedHeader
				fixedHeaderScrollHeight='430px'
				pagination
				paginationComponentOptions={paginacionOpciones}
				noDataComponent=''
				striped={true}
			/>
		</>
	);
}

export default JobPostingList;
