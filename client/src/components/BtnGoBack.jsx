import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function BtnGoBack() {
	const navigate = useNavigate();

	return (
		<Button onClick={() => navigate(-1)} className='btn btn-light'>
			Go back
		</Button>
	);
}

export default BtnGoBack;
