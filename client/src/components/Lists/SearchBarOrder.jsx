import React from "react";
import {Search2Icon} from "@chakra-ui/icons";
import {
	Box,
	Stack,
	Input,
	InputGroup,
	Button,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getJobPostingByTitle} from "../../actions/ordenes/index";
function SearchBarOrder() {
	const {colorMode, toggleColorMode} = useColorMode();
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handleInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getJobPostingByTitle(name));
		setName("");
		//setCurrentPage
	};
	return (
		<>
			<Stack
				direction={{base: "column", sm: "column", md: "row"}}
				spacing={3}
				justify='center'
				width={{
					base: "100%",
					sm: "80%",
					md: "60%",
					lg: "40%",
					xl: "30%",
					"2xl": "25%",
				}}
				padding='10px'
				display={"flex"}>
				<InputGroup
					size={{base: "md", md: "md", lg: "lg"}}
					padding='5px'
					border={"1px solid gray"}
					rounded='20px'>
					<Input
						type='text'
						color='black'
						placeholder='Search by Position Name...'
						bg={"white"}
						border='none'
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>

					<Button
						color='white'
						bg={useColorModeValue(
							"var(--primary-light)",
							"var(--primary-dark)"
						)}
						rounded={"20px"}
						variant='solid'
						colorScheme='brand'
						size={{base: "md", md: "md", lg: "lg"}}
						type='submit'
						onClick={handleSubmit}
						leftIcon={<Search2Icon />}
					/>
				</InputGroup>
			</Stack>
		</>
	);
}

export default SearchBarOrder;
