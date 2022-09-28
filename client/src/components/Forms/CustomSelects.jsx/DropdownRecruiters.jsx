import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import usePersona from "../../../CustomHooks/usePersona";
import Select from "react-select";

function DropdownRecruiters({handleOnChange}) {
	const recruiters = usePersona("recruiter");
	console.log("recruiters select: ", recruiters);
	const options = getOptions(recruiters);
	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>Recruiters</Form.Label>
			<Select
				name={"recruiter"}
				options={options}
				Searchable
				onChange={handleOnChange}
			/>
		</Form.Group>
	);
}

export default DropdownRecruiters;

const getOptions = (array) => {
	// Formateamos la opcion de acuerdo a la dependencia Select
	const newOption = (propValue, propLabel) => {
		let newObject = {
			value: propValue,
			label: propLabel,
		};
		return newObject;
	};
	//
	const storeOptions = (array) => {
		const storedOptions = array.map((e) => {
			return newOption(e.personaId, e.nombre);
		});
		return storedOptions;
	};
	return storeOptions(array);
};

const getDefaultValue = (array, value) => {
	const foundObject = array.find((property) => property.value === value);
	if (!foundObject) {
		const defaultValueObject = {
			label: "Select a Company",
			value: 0,
			isdisabled: true,
		};
		return defaultValueObject;
	}
	return foundObject;
};
