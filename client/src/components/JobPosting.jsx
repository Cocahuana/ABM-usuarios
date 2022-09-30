import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "@chakra-ui/react";
import {Box, Stack, Input, InputGroup, Button} from "@chakra-ui/react";
import {getJobPostingStates, getJobsPosting} from "../actions";
import JobPostingList from "./Lists/JobPostingList";
import SearchBar from "./SearchBar";
function JobPosting() {
	const [loading, setLoading] = useState(false);
	const ordenes = useSelector((state) => state.jobsPosting);
	const ordenEstados = useSelector((state) => state.jobPostingStates);
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(getJobsPosting());
			dispatch(getJobPostingStates());
			if (ordenes && ordenEstados) setLoading(true);
		};
	}, [dispatch]);

	return (
		<>
			{loading === false ? (
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
			) : (
				<Stack
					direction={"column"}
					justify='center'
					align={"center"}
					padding='10px'>
					<SearchBar />
					<JobPostingList
						data={ordenes}
						jobPostingStates={ordenEstados}
					/>
					<Button as={Link} to='/jobPosting/add' className='primary'>
						Add Job Posting
					</Button>
					<Button as={Link} to='/' className='btn btn-light'>
						Go back
					</Button>
				</Stack>
			)}
		</>
	);
}

export default JobPosting;
