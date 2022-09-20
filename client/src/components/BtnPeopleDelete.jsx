import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteUserById } from "../actions";
// import { Button } from "react-bootstrap";

import styled from "styled-components";

const BtnDanger = styled.button`
	border-radius: 6px;
	border: 2px solid;
`;

const toastTitle = "Admin";
const toastDescription = "Admin Eliminated successfully";

function BtnPeopleDelete({ id, closeModal }) {
	const toast = useToast();
	// Con e.preventDefault evitamos que al montar un componente se ejecute el boton
	const dispatch = useDispatch();
	const handleOnDelete = (e, id) => {
		e.preventDefault();
		dispatch(deleteUserById(id)).then((res) => {
			closeModal();
			toast({
				title: toastTitle,
				description: toastDescription,
				status: "success",
				duration: 9000,
				isClosable: true,
			});
		});
	};

	return (
		<>
			<BtnDanger
				className='btn btn-danger'
				onClick={(e) => handleOnDelete(e, id)}>
				Delete
			</BtnDanger>
		</>
	);
}

export default BtnPeopleDelete;
