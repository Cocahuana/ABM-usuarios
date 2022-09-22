import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function CustomInput({
	title,
	name,
	type,
	placeholder,
	value,
	errors,
	handleOnChange,
}) {
	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>{title}</Form.Label>
			<Form.Control
				type={type}
				placeholder={placeholder}
				name={name}
				required
				value={value}
				isInvalid={errors}
				isValid={value.length === 0 ? false : !errors}
				onChange={handleOnChange}
			/>
			<Form.Control.Feedback type='invalid'>
				{errors}
			</Form.Control.Feedback>
		</Form.Group>
	);
}

export default CustomInput;
