import React from "react";
import {Stack, Spinner} from "@chakra-ui/react";

function LoadingSpinner() {
	return (
		<Stack
			w='100%'
			h='90vh'
			direction={"column"}
			justify='center'
			align={"center"}>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
				size='xl'
				justifyContent={"center"}
			/>
		</Stack>
	);
}

export default LoadingSpinner;
