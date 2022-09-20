import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal() {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				<i className='fas fa-user-edit'></i>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Woohoo, you're reading this text in a modal!
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CustomModal;
