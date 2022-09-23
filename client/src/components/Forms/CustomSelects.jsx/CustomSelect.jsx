import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
// import makeAnimated from "react-select/animated";

function CustomSelect({ title, name, options, handleOnChange }) {
	// const animatedComponents = makeAnimated();

	return (
		<Form.Group as={Col} className='mb-3'>
			<Form.Label>{title}</Form.Label>
			<Select
				name={name}
				options={options}
				Searchable
				onChange={handleOnChange}
			/>
		</Form.Group>
	);
}

{
	/* Multi select */
	// <Form.Group as={Col} className='mb-3'>
	// 	<Form.Label>{title}</Form.Label>
	// 	<Select
	// 		closeMenuOnSelect={false}
	// 		name={name}
	// 		components={animatedComponents}
	// 		options={options}
	// 		Searchable
	// 		onChange={handleOnChange}
	// 		isMulti
	// 	/>
	// </Form.Group>;
}

export default CustomSelect;
