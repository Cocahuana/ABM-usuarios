import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import {useSelector} from "react-redux";
import {getCompanies} from "../../../actions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
function DropdownCompanies({handleOnChange}) {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(getCompanies());
		};
	}, [dispatch]);
	const {companies} = useSelector((state) => state);

	const getOptions = () => {
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
				return newOption(e.empresaId, e.nombre);
			});
			return storedOptions;
		};
		return storeOptions(companies);
	};

	const options = getOptions(companies);
	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>Companies</Form.Label>
			<Select
				name={"empresaId"}
				options={options}
				Searchable
				onChange={handleOnChange}
			/>
		</Form.Group>
	);
}

export default DropdownCompanies;
