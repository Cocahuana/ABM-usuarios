import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import {useSelector} from "react-redux";
import {getStudies} from "../../../actions/estudios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getOptions} from "../../../utils/getOptions";
function DropdownEstudios({handleOnChange}) {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(getStudies());
		};
	}, [dispatch]);
	const {studies} = useSelector((state) => state);

	const options = getOptions(studies, "idEstudio", "study");
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
