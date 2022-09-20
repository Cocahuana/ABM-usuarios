import React, { useState, useEffect } from "react";

async function loginUser(credentials) {
	/*El login esta hardcodeado ahora, pero deberia explicarse como 
	funcionaria en el back, lo unico que se necesitaria desde el 
	front es el token como propiedad de un objeto. Siempre y cuando 
	el token permanezca activo, el usuario permanecerá logueado */
	console.log("Validando credenciales en el back... :", credentials);
	let backendToken;
	switch (credentials.username) {
		case "admin":
			backendToken = { token: "admin" };
			break;
		case "candidate":
			backendToken = { token: "candidate" };
			break;
		case "client":
			backendToken = { token: "client" };
			break;
		case "recruiter":
			backendToken = { token: "recruiter" };
			break;
	}

	return backendToken;
}

function Login({ changeAuthMode, setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	useEffect(() => {
		return () => {
			console.log("UseEffect");
		};
	}, [loginUser]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password,
		});
		setToken(token);
	};
	return (
		<div className='Auth-form-container'>
			<form className='Auth-form' onSubmit={handleSubmit}>
				<div className='Auth-form-content'>
					<h3 className='Auth-form-title'>Sign In</h3>
					<div className='text-center'>
						Not registered yet?{" "}
						<span className='link-primary' onClick={changeAuthMode}>
							Sign Up
						</span>
					</div>
					<div className='form-group mt-3'>
						<label>Username</label>
						<input
							type='text'
							className='form-control mt-1'
							placeholder='Enter Username'
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Password</label>
						<input
							type='password'
							className='form-control mt-1'
							placeholder='Enter password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='d-grid gap-2 mt-3'>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</div>
					<p className='text-center mt-2'>
						Forgot <a href='#'>password?</a>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Login;
