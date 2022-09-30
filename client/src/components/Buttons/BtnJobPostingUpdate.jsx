import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function BtnJobPostingUpdate({id}) {
	const navigate = useNavigate();
	const handleOnUpdate = (e, id) => {
		e.preventDefault();
		navigate(`/jobPosting/update/${id}`);
	};
	return (
		<Button variant='primary' onClick={(e) => handleOnUpdate(e, id)}>
			<i className='fas fa-user-edit'></i>
		</Button>
	);
}

export default BtnJobPostingUpdate;
