import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BtnPeopleDelete from "../BtnPeopleDelete";
import BtnPeopleUpdate from "../BtnPeopleUpdate";
function FormUpdateModal({ personId }) {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				<i className='fas fa-user-edit'></i>
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					You are about to modify a person, select an action
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<BtnPeopleDelete closeModal={handleClose} id={personId} />
					<BtnPeopleUpdate id={personId} />
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default FormUpdateModal;
