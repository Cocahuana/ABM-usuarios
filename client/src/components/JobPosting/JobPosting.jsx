import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box, Stack, Input, InputGroup, Button} from "@chakra-ui/react";
import {getJobPostingStates, getJobsPosting} from "../../actions";
import JobPostingList from "../Lists/JobPostingList";
import LoadingSpinner from "../Spinners/LoadingSpinner";
import SearchBarOrder from "../Lists/SearchBarOrder";
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
				<LoadingSpinner />
			) : (
				<Stack
					direction={"column"}
					justify='center'
					align={"center"}
					padding='10px'>
					<SearchBarOrder />
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
