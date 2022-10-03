import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import {useSelector} from "react-redux";
import {getStudies} from "../../../actions/estudios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
function DropdownEstudios({handleOnChange}) {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(getStudies());
		};
	}, [dispatch]);
	const {studies} = useSelector((state) => state);

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
				return newOption(e.idEstudio, e.study);
			});
			return storedOptions;
		};
		return storeOptions(studies);
	};

	const options = getOptions(studies);
	const def = [{value: 0, label: "No selected"}];
	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>Academic Studies</Form.Label>
			<Select
				name='estudiosId'
				options={options}
				defaultValue={def}
				onChange={handleOnChange}
			/>
		</Form.Group>
	);
}

export default DropdownEstudios;
