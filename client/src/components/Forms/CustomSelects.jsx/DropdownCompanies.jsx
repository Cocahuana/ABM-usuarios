import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import {useSelector, useDispatch} from "react-redux";
import {getCompanies} from "../../../actions/empresas";
import {useEffect} from "react";
import {getOptions} from "../../../utils/getOptions";
function DropdownCompanies({handleOnChange}) {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(getCompanies());
		};
	}, [dispatch]);
	const {companies} = useSelector((state) => state);

	let DEFAULT_VALUE = getDefaultValue(companies, 0);
	const options = getOptions(companies, "empresaId", "nombre").concat(
		DEFAULT_VALUE
	);
	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>Companies</Form.Label>
			<Select
				name={"empresaId"}
				options={options}
				Searchable
				onChange={handleOnChange}
				defaultValue={DEFAULT_VALUE}
				isOptionDisabled={(DEFAULT_VALUE) => DEFAULT_VALUE.isdisabled} // disable an option
			/>
		</Form.Group>
	);
}

export default DropdownCompanies;

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
