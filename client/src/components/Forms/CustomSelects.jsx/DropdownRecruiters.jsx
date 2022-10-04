import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import usePersona from "../../../CustomHooks/usePersona";
import Select from "react-select";
import {getOptions} from "../../../utils/getOptions";
function DropdownRecruiters({handleOnChange}) {
	const recruiters = usePersona("recruiter");
	const options = getOptions(recruiters, "personaId", "nombre");
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
