import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Button,
	useDisclosure,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
function BtnGoBack() {
	const navigate = useNavigate();
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Button
			bg={useColorModeValue(
				"var(--primary-light)",
				"var(--primary-dark)"
			)}
			onClick={() => navigate(-1)}>
			Go back
		</Button>
	);
}

export default BtnGoBack;
