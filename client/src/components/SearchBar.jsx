import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { getPeopleByName } from "../actions";
function SearchBar({ personaTipoId }) {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getPeopleByName(name, personaTipoId));
		setName("");
		//setCurrentPage
	}
	return (
		<InputGroup className='col-6'>
			<Form.Control
				placeholder='Search by First Name'
				aria-label='Search'
				value={name}
				onChange={(e) => handleInputChange(e)}
			/>
			<Button
				type='submit'
				onClick={handleSubmit}
				variant='outline-secondary'>
				Search
			</Button>
		</InputGroup>
	);
}

export default SearchBar;
